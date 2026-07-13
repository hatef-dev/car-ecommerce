<template>
  <section class="py-16">
    <div class="container px-4 sm:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">آمار ما</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          نشان‌گذاری از رشد و فعالیت ما در طول سال‌ها.
        </p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <StatItem :end-value="10000" label="محصول فروش" />
        <StatItem :end-value="500" label="مشتری خوشحال" />
        <StatItem :end-value="10" label="سال تجربه" />
        <StatItem :end-value="25" label="کشور سرویس" />
      </div>
    </div>
  </section>
</template>

<script>
import StatItem from "./StatItem.vue";

export default {
  name: "AboutStats",
  components: { StatItem },
};
</script>