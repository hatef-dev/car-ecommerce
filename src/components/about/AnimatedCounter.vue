<template>
  <span>{{ currentValue.toLocaleString() }}</span>
</template>

<script>
export default {
  name: "AnimatedCounter",
  props: {
    endValue: { type: Number, required: true },
  },
  data() {
    return {
      currentValue: 0,
      duration: 2000,
      startTime: null,
    };
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      this.startTime = performance.now();
      this.animate(performance.now());
    },
    animate(timestamp) {
      if (!this.startTime) this.startTime = timestamp;
      const progress = Math.min((timestamp - this.startTime) / this.duration, 1);
      this.currentValue = Math.floor(progress * this.endValue);

      if (progress < 1) {
        requestAnimationFrame(this.animate.bind(this));
      }
    },
  },
};
</script>