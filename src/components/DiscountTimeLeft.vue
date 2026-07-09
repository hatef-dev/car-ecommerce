<template>
  <div class="flex items-center gap-x-2" dir="rtl">
    <div
      v-for="unit in units"
      :key="unit.label"
      class="bg-yellow-300 rounded-full w-16 h-16 flex justify-center items-center font-semibold"
    >
      <span class="text-black text-2xl">{{ unit.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscountTimeLeft",
  props: {
    // ISO string or timestamp (ms) coming from the backend,
    // e.g. "2025-07-15T20:00:00" or the offer's expires_at field
    endTime: {
      type: [String, Number, Date],
      required: true,
    },
  },
  emits: ["expired"],
  data() {
    return {
      remainingMs: 0,
      timer: null,
    };
  },
  computed: {
    units() {
      const totalSeconds = Math.max(0, Math.floor(this.remainingMs / 1000));
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      // order matters: with dir="rtl" on the wrapper, the first
      // item in this array renders on the right side visually.
      return [
        { label: "seconds", value: this.pad(seconds) },
        { label: "minutes", value: this.pad(minutes) },
        { label: "hours", value: this.pad(hours) },
      ];
    },
  },
  mounted() {
    this.tick();
    this.timer = setInterval(this.tick, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  watch: {
    endTime() {
      this.tick();
    },
  },
  methods: {
    tick() {
      const target = new Date(this.endTime).getTime();
      const now = Date.now();
      this.remainingMs = target - now;

      if (this.remainingMs <= 0) {
        this.remainingMs = 0;
        clearInterval(this.timer);
        this.$emit("expired");
      }
    },
    pad(num) {
      return String(num).padStart(2, "0");
    },
  },
};
</script>
