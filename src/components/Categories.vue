<script setup>
import { ref, computed } from "vue";
import ProductSwiper from "./ProductSwiper.vue";
import { Squares2X2Icon, ChevronLeftIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  categoriesData: {
    type: Object,
    default: () => ({
      title: "دسته‌بندی قطعات",
      link: "/categories",
      children: [
        {
          title: "قطعات موتوری",
          link: "/categories/engine",
          children: [
            { title: "سرسیلندر", link: "/categories/engine/cylinder-head" },
            { title: "میل‌لنگ", link: "/categories/engine/crankshaft" },
            { title: "پیستون و رینگ موتور", link: "/categories/engine/piston" },
            { title: "شاتون", link: "/categories/engine/connecting-rod" },
            { title: "واشر سرسیلندر", link: "/categories/engine/cylinder-gasket" },
            { title: "واتر پمپ", link: "/categories/engine/water-pump" },
            { title: "سایر قطعات موتوری", link: "/categories/engine/others" },
          ],
        },
        {
          title: "سیستم تعلیق و فرمان",
          link: "/categories/suspension",
          children: [
            { title: "پمپ هیدرولیک فرمان", link: "/categories/suspension/steering-pump" },
            { title: "کابل حلزونی فرمان", link: "/categories/suspension/spiral-cable" },
            { title: "سایر قطعات تعلیق", link: "/categories/suspension/others" },
          ],
        },
        {
          title: "سیستم برقی و سنسورها",
          link: "/categories/electrical",
          children: [
            { title: "استارت کامل", link: "/categories/electrical/starter" },
            { title: "دینام کامل", link: "/categories/electrical/alternator" },
            { title: "سنسور اکسیژن", link: "/categories/electrical/oxygen-sensor" },
            { title: "سنسور میل سوپاپ و مپ", link: "/categories/electrical/sensors" },
            { title: "شمع موتور", link: "/categories/electrical/spark-plug" },
            { title: "سایر قطعات برقی", link: "/categories/electrical/others" },
          ],
        },
        {
          title: "گیربکس و کلاچ",
          link: "/categories/transmission",
          children: [
            { title: "بلبرینگ کلاچ", link: "/categories/transmission/clutch-bearing" },
            { title: "پمپ کلاچ", link: "/categories/transmission/clutch-pump" },
            { title: "سایر قطعات گیربکس", link: "/categories/transmission/others" },
          ],
        },
        {
          title: "سیستم تهویه و کولر",
          link: "/categories/cooling-heating",
          children: [
            { title: "کمپرسور کولر", link: "/categories/cooling-heating/compressor" },
            { title: "مقاومت بخاری", link: "/categories/cooling-heating/resistor" },
            { title: "هوزینگ و ترموستات", link: "/categories/cooling-heating/thermostat" },
            { title: "سایر قطعات تهویه", link: "/categories/cooling-heating/others" },
          ],
        },
      ],
    }),
  },
});

const categories = props.categoriesData.children;
const activeIndex = ref(2); // پیش‌فرض مثل عکس، دسته سوم (تعلیق) فعاله

const activeCategory = computed(() => categories[activeIndex.value]);

// زیردسته‌ها رو به فرمت مورد نیاز ProductCard تبدیل می‌کنیم
// وقتی API واقعی محصول وصل شد، کافیه اینجا داده رو از اونجا بگیری
const activeProducts = computed(() =>
  (activeCategory.value.children || []).map((child) => ({
    title: child.title,
    link: child.link,
    image: child.image ?? null,
    price: child.price ?? null,
    discountPrice: child.discountPrice ?? null,
  })),
);
</script>

<template>
  <div dir="rtl" class="w-full font-sans">
    <div class="flex flex-col lg:flex-row gap-6 container mx-auto px-4">
      <!-- سایدبار دسته‌بندی -->
      <aside class="w-full lg:w-80 shrink-0">
        <div class="bg-white rounded-2xl p-4 sm:p-6 lg:sticky lg:top-4">
          <h3 class="text-black font-bold text-lg sm:text-xl mb-4 relative w-fit">
            دسته‌بندی‌ها
            <span class="absolute -bottom-1 right-0 w-8 h-0.5 bg-black rounded-full"></span>
          </h3>

          <nav class="flex flex-col gap-1.5">
            <button
              v-for="(cat, index) in categories"
              :key="cat.link"
              @click="activeIndex = index"
              class="flex items-center justify-between gap-2 px-3 py-2.5 rounded-full text-sm sm:text-base transition-all duration-300 text-right"
              :class="
                activeIndex === index ? 'bg-black text-white' : 'text-[#3d3d3d] hover:bg-[#f5f5f5]'
              "
            >
              <span class="flex items-center gap-2">
                <Squares2X2Icon class="w-5 h-5 shrink-0" />
                <span class="truncate">{{ cat.title }}</span>
              </span>
              <ChevronLeftIcon class="w-4 h-4 shrink-0" />
            </button>
          </nav>
        </div>
      </aside>

      <!-- محتوای اصلی: فقط اسلایدر دسته‌ی فعال -->
      <div class="flex-1 min-w-0">
        <section :key="activeCategory.link">
          <h2 class="text-black font-semibold text-2xl sm:text-3xl mb-3 sm:mb-4">
            {{ activeCategory.title }}
          </h2>
          <ProductSwiper :slideshow="4" :products="activeProducts" />
        </section>
      </div>
    </div>
  </div>
</template>
