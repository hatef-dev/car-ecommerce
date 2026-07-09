<template>
  <div class="bg-black">
    <div class="container py-10 flex flex-col gap-y-5">
      <h1 class="text-white text-4xl font-bold">پیشنهادهای شگفت‌انگیز هفته</h1>
      <DiscountTimeLeft v-if="endTime" :end-time="endTime" @expired="onExpired" />
    </div>
  </div>
</template>

<script>
import DiscountTimeLeft from "./DiscountTimeLeft.vue";

export default {
  name: "DiscountBanner",
  components: {
    DiscountTimeLeft,
  },
  data() {
    return {
      endTime: new Date(Date.now() + 2 * 60 * 1000).toISOString(), // filled once the backend responds
    };
  },
  async mounted() {
    // Example: replace with your real endpoint.
    // Expected response shape: { expiresAt: "2025-07-15T20:00:00Z" }
    try {
      const res = await fetch("/api/discounts/current-offer");
      const data = await res.json();
      this.endTime = data.expiresAt;
    } catch (err) {
      console.error("Failed to load offer end time:", err);
    }
  },
  methods: {
    onExpired() {
      // e.g. refetch a new offer, hide the banner, show "offer ended", etc.
      console.log("Offer expired");
    },
  },
};
</script>
