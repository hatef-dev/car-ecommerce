<template>
  <div class="confetti-button-wrapper" ref="wrapper">
    <!-- Hidden canvas for rendering particles -->
    <canvas ref="canvas" class="confetti-canvas"></canvas>

    <!-- The actual button -->
    <button
      ref="button"
      class="cbtn cbtn-dark border border-white"
      :data-colors="colors"
      :class="`cbtn-${type}`"
      @click="burst"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "ConfettiButton",

  props: {
    colors: {
      type: String,
      default: "#fff,#ccc,#999,#555",
    },
    type: {
      type: String,
      default: "dark", // "dark" | "outline"
    },
  },

  data() {
    return {
      SHAPES: ["rect", "circle", "ribbon"],
      EASINGS: ["cubic-bezier(.22,1,.36,1)", "cubic-bezier(.4,0,.6,1)", "ease-out"],
      particles: [],
      animationId: null,
      lastTime: 0,
    };
  },

  mounted() {
    // Initialize canvas
    this.initCanvas();
    // Clean up on unmount
    window.addEventListener("resize", this.initCanvas);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.initCanvas);
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  },

  methods: {
    initCanvas() {
      const canvas = this.$refs.canvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    },

    burst(e) {
      const btn = this.$refs.button;
      const wrapper = this.$refs.wrapper;
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      // Button visual feedback
      btn.classList.remove("fired");
      void btn.offsetWidth;
      btn.classList.add("fired");

      const colors = this.colors.split(",");
      const rect = btn.getBoundingClientRect();

      // Calculate explosion origin (center of button)
      const ox = rect.left + rect.width / 2;
      const oy = rect.top + rect.height / 2;

      // Calculate available space in each direction
      const padding = 30; // Minimum distance from screen edge
      const spaceLeft = ox - padding;
      const spaceRight = window.innerWidth - ox - padding;
      const spaceTop = oy - padding;
      const spaceBottom = window.innerHeight - oy - padding;

      // Calculate number of particles based on available space
      const maxDistance = Math.max(spaceLeft, spaceRight, spaceTop, spaceBottom);
      const baseCount = 35;
      const count = baseCount + Math.floor(Math.random() * 15);

      // Generate particles with space-aware distribution
      this.particles = [];

      for (let i = 0; i < count; i++) {
        // First, determine initial angle with intelligent bias
        let angle;

        // If button is near an edge, bias particles away from that edge
        const angleBias = this.calculateAngleBias(spaceLeft, spaceRight, spaceTop, spaceBottom);

        // Generate angle with bias
        angle = ((Math.PI * 2) / count) * i + (Math.random() - 0.5) * 0.8 + angleBias;

        // Calculate maximum safe distance in this direction
        const maxSafeDistance = this.calculateMaxDistance(angle, ox, oy, padding);

        // Generate random distance within safe bounds
        const distance = 50 + Math.random() * Math.min(maxSafeDistance - 15, 40);

        // Calculate target positions
        let tx = Math.cos(angle) * distance;
        let ty = Math.sin(angle) * distance;

        // Add vertical bias for natural looking fall
        ty -= 10 + Math.random() * 10;

        // Recalculate max distance with vertical bias
        const recalculatedDistance = Math.sqrt(tx * tx + ty * ty);
        const recalculatedMaxDistance = this.calculateMaxDistance(
          Math.atan2(ty, tx),
          ox,
          oy,
          padding,
        );

        // Ensure final position is safe
        if (recalculatedDistance > recalculatedMaxDistance) {
          const scale = recalculatedMaxDistance / recalculatedDistance;
          tx *= scale;
          ty *= scale;
        }

        // Create particle
        this.particles.push({
          x: 0,
          y: 0,
          targetX: tx,
          targetY: ty,
          originX: ox,
          originY: oy,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: this.SHAPES[Math.floor(Math.random() * this.SHAPES.length)],
          size: 5 + Math.random() * 8,
          rotation: (Math.random() - 0.5) * 900,
          rotationSpeed: (Math.random() - 0.5) * 10,
          duration: 800 + Math.random() * 600,
          startTime: performance.now(),
          ease: this.EASINGS[Math.floor(Math.random() * this.EASINGS.length)],
        });
      }

      // Start animation loop
      this.lastTime = performance.now();
      this.animate(ctx);
    },

    /**
     * Calculate angle bias to avoid edges
     * Returns an angle in radians to bias particle distribution
     */
    calculateAngleBias(spaceLeft, spaceRight, spaceTop, spaceBottom) {
      let biasX = 0;
      let biasY = 0;

      // Calculate horizontal bias
      if (spaceLeft < 100) {
        biasX = 1; // Favor right
      } else if (spaceRight < 100) {
        biasX = -1; // Favor left
      }

      // Calculate vertical bias
      if (spaceTop < 100) {
        biasY = 1; // Favor down
      } else if (spaceBottom < 100) {
        biasY = -1; // Favor up
      }

      // If near a corner, combine biases
      return Math.atan2(biasY, biasX) * 0.3;
    },

    /**
     * Calculate maximum safe distance in a given direction
     */
    calculateMaxDistance(angle, ox, oy, padding) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      let maxDist = Infinity;

      // Check intersection with right edge
      if (cos > 0.001) {
        const distX = (window.innerWidth - ox - padding) / cos;
        maxDist = Math.min(maxDist, distX);
      }

      // Check intersection with left edge
      if (cos < -0.001) {
        const distX = -(ox - padding) / cos;
        maxDist = Math.min(maxDist, distX);
      }

      // Check intersection with bottom edge
      if (sin > 0.001) {
        const distY = (window.innerHeight - oy - padding) / sin;
        maxDist = Math.min(maxDist, distY);
      }

      // Check intersection with top edge
      if (sin < -0.001) {
        const distY = -(oy - padding) / sin;
        maxDist = Math.min(maxDist, distY);
      }

      return maxDist;
    },

    animate(ctx) {
      const currentTime = performance.now();
      const deltaTime = currentTime - this.lastTime;
      this.lastTime = currentTime;

      // Clear canvas
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      let allDone = true;

      // Update and draw particles
      this.particles.forEach((particle) => {
        const elapsed = currentTime - particle.startTime;
        const progress = Math.min(elapsed / particle.duration, 1);

        if (progress < 1) {
          allDone = false;

          // Apply easing to progress
          const easedProgress = this.applyEasing(progress, particle.ease);

          // Calculate current position
          particle.x = particle.targetX * easedProgress;
          particle.y = particle.targetY * easedProgress;

          // Update rotation
          particle.rotation += particle.rotationSpeed * (deltaTime / 16);

          // Calculate opacity (fade out at end)
          const opacity = 1 - this.applyEasing(progress, "ease-in");

          // Draw particle
          this.drawParticle(ctx, particle, opacity);
        }
      });

      // Continue animation if not done
      if (!allDone) {
        this.animationId = requestAnimationFrame(() => this.animate(ctx));
      } else {
        this.animationId = null;
        // Clear remaining particles
        this.particles = [];
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }
    },

    /**
     * Apply easing to progress value
     */
    applyEasing(progress, ease) {
      if (ease === this.EASINGS[0]) {
        // cubic-bezier(.22,1,.36,1) approximation
        return 1 - Math.pow(1 - progress, 3);
      } else if (ease === this.EASINGS[1]) {
        // cubic-bezier(.4,0,.6,1) approximation
        return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      } else {
        // ease-out
        return 1 - Math.pow(1 - progress, 2);
      }
    },

    drawParticle(ctx, particle, opacity) {
      ctx.save();
      ctx.globalAlpha = opacity;

      const x = particle.originX + particle.x;
      const y = particle.originY + particle.y;

      ctx.translate(x, y);
      ctx.rotate((particle.rotation * Math.PI) / 180);

      ctx.fillStyle = particle.color;

      // Draw different shapes
      if (particle.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (particle.shape === "ribbon") {
        const w = particle.size * 0.4;
        const h = particle.size * 2.5;
        ctx.fillRect(-w / 2, -h / 2, w, h);
      } else {
        // Rectangle
        const size = particle.size;
        ctx.fillRect(-size / 2, -size / 2, size, size);
      }

      ctx.restore();
    },
  },
};
</script>

<style scoped>
.confetti-button-wrapper {
  position: relative;
  display: inline-block;
}

.confetti-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
}

.cbtn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.2s;
  z-index: 2;
}

.cbtn:hover {
  transform: scale(1.05);
}

.cbtn:active {
  transform: scale(0.96);
}

.cbtn-dark {
  background: linear-gradient(180deg, #2a2521, #1a1714);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.15) inset,
    0 -1px 0 rgba(0, 0, 0, 0.4) inset,
    0 6px 14px rgba(0, 0, 0, 0.5),
    0 2px 4px rgba(0, 0, 0, 0.6);
}

.cbtn-dark:hover {
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.18) inset,
    0 -1px 0 rgba(0, 0, 0, 0.4) inset,
    0 8px 18px rgba(0, 0, 0, 0.55),
    0 3px 5px rgba(0, 0, 0, 0.6);
}

.cbtn-dark:active {
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.1) inset,
    0 -1px 0 rgba(0, 0, 0, 0.3) inset,
    0 2px 5px rgba(0, 0, 0, 0.4);
}

.cbtn-outline {
  background: #fff;
  color: #1a1714;
  border: 1px solid #1a1714;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.6) inset,
    0 4px 10px rgba(0, 0, 0, 0.35),
    0 1px 2px rgba(0, 0, 0, 0.5);
}

.cbtn-outline:hover {
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.6) inset,
    0 6px 14px rgba(0, 0, 0, 0.4),
    0 2px 3px rgba(0, 0, 0, 0.5);
}

.cbtn-outline:active {
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.6) inset,
    0 2px 5px rgba(0, 0, 0, 0.3);
}

.cbtn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.2);
  opacity: 0;
  transform: scale(0);
}

.cbtn.fired::after {
  animation: ripple 0.5s ease-out forwards;
}

@keyframes ripple {
  to {
    opacity: 0;
    transform: scale(2.2);
  }
}
</style>
