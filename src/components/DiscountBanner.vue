<template>
  <div class="bg-black">
    <div class="container py-10 flex flex-col gap-y-5">
      <h1 class="text-white text-4xl font-bold">پیشنهادهای شگفت‌انگیز هفته</h1>
      <DiscountTimeLeft :source="['12', '00', '00']" />
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
};
</script>
