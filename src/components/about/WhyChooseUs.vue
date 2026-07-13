<template>
  <section class="bg-gray-50 py-16">
    <div class="container px-4 sm:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">چرا ما را انتخاب کنیم؟</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          ما با تمرکز بر کیفیت، خدمات عالی و رضایت مشتری، استانداردهای بلند را برای خود تعیین کرده‌ایم.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard icon="shield-check" title="کیفیت تضمینی" description="تمام قطعات با گارانتی کیفیت ارائه می‌شوند." />
        <FeatureCard icon="truck" title="تحویل سریع" description="امروز سفارش دهید، فردا دریافت کنید." />
        <FeatureCard icon="clock" title="پشتیبانی ۲۴/۷" description="هر زمان که نیاز به کمک داشتید، در دسترس هستیم." />
        <FeatureCard icon="credit-card" title="پرداخت آسان" description="روش‌های پرداخت متنوع و ایمن برای راحتی شما." />
      </div>
    </div>
  </section>
</template>

<script>
import FeatureCard from "./FeatureCard.vue";

export default {
  name: "WhyChooseUs",
  components: { FeatureCard },
};
</script>