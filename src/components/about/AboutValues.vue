<template>
  <section class="bg-black py-16 text-white">
    <div class="container px-4 sm:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">ارزش‌های ما</h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          اصولی که ما را در همه کارهایمان پایتخت می‌کنند.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ValueCard title="کیفیت" description="ما فقط بهترین قطعات را برای شما ارائه می‌دهیم." />
        <ValueCard title="شفافیت" description="قیمت‌ها و جزئیات واضح و بدون هیچ‌گونه پنهان‌کاری." />
        <ValueCard title="نوآوری" description="با به‌روزرسانی مستمر و معرفی فناوری‌های جدید." />
        <ValueCard title="رضایت" description="مشتریان ما در اولویت ما هستند و رضایتشان مهم است." />
      </div>
    </div>
  </section>
</template>

<script>
import ValueCard from "./ValueCard.vue";

export default {
  name: "AboutValues",
  components: { ValueCard },
};
</script>