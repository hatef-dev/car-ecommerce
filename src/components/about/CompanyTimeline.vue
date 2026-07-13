<template>
  <div class="relative">
    <div class="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"></div>
    <div v-for="(item, index) in timeline" :key="index" class="mb-12 sm:mb-0">
      <div class="flex items-center sm:flex-row-reverse gap-x-4 sm:gap-x-8">
        <div class="relative flex-shrink-0">
          <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center z-10">
            <span class="text-black text-xs font-bold">{{ item.year }}</span>
          </div>
          <div class="absolute -bottom-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow-sm w-full sm:w-1/2">
          <h3 class="font-bold text-lg mb-2">{{ item.event }}</h3>
          <p class="text-gray-600 text-sm">{{ item.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>