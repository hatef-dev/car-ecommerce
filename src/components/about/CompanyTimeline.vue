<template>
  <div class="relative">
    <!-- خط عمودی وسط - فقط دسکتاپ -->
    <div
      class="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"
    ></div>

    <div
      v-for="(item, index) in timeline"
      :key="index"
      ref="items"
      class="relative mb-10 sm:mb-16 last:mb-0"
    >
      <!-- چیدمان موبایل: افقی ساده -->
      <div class="flex sm:hidden items-center gap-x-4">
        <div
          class="w-9 h-9 rounded-full bg-yellow-400 ring-4 ring-white shadow-md flex items-center justify-center flex-shrink-0 z-10"
        >
          <span class="text-black text-[10px] font-bold">{{ item.year }}</span>
        </div>
        <div class="bg-white rounded-2xl p-5 shadow-sm flex-1 text-right">
          <h3 class="font-bold text-base mb-1">{{ item.event }}</h3>
          <p class="text-gray-500 text-xs">{{ item.year }}</p>
        </div>
      </div>

      <!-- چیدمان دسکتاپ: زیگزاگ با دات وسط -->
      <div class="hidden sm:flex items-center">
        <div
          class="w-9 h-9 rounded-full bg-yellow-400 ring-4 ring-white shadow-md flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10"
        >
          <span class="text-black text-[10px] font-bold">{{ item.year }}</span>
        </div>
        <div
          class="bg-white rounded-2xl p-6 shadow-sm w-[45%] text-right"
          :class="index % 2 === 0 ? 'mr-auto' : 'ml-auto'"
        >
          <h3 class="font-bold text-lg mb-1">{{ item.event }}</h3>
          <p class="text-gray-500 text-sm">{{ item.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "CompanyTimeline",
  data() {
    return {
      timeline: [
        { year: "1392", event: "تاسیس شرکت" },
        { year: "1395", event: "گسترش به کشورهای همسایه" },
        { year: "1398", event: "بیش از ۱۰۰۰ مشتری رضایت‌بخش" },
        { year: "1400", event: "تجربه بیش از ۱۰ سال در صنعت خودرو" },
        { year: "1402", event: "گسترش خدمات فنی و تعمیر" },
      ],
    };
  },
  mounted() {
    this.$refs.items?.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power2.out",
        delay: i * 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
        },
      });
    });
  },
};
</script>
