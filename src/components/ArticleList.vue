<template>
  <div class="bg-white p-4 sm:p-6 rounded-2xl hover:rotate-6 transition-transform duration-300">
    <div class="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-10">
      <img
        src="@/assets/char.jpg"
        alt="char"
        class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full shrink-0"
      />
      <div class="flex flex-col gap-y-3 sm:gap-y-6 min-w-0">
        <div class="flex flex-col gap-y-2">
          <h2 class="text-base sm:text-lg font-medium truncate">{{ title }}</h2>
          <p class="text-xs sm:text-sm font-medium">{{ date }}</p>
        </div>
        <router-link :to="link" class="text-black rounded-md inline-flex gap-x-2 items-center">
          <span class="text-sm sm:text-base">مشاهده همه</span>
          <ArrowUpLeftIcon class="w-4 h-4 text-black" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowUpLeftIcon } from "@heroicons/vue/24/outline";
export default {
  name: "ArticleList",
  props: {
    title: {
      type: String,
      default: "بهترین شامپو برای پسوریازیس پوست سر",
    },
    date: {
      type: String,
      default: "2023-08-10",
    },
    link: {
      type: String,
      default: "",
    },
  },
  components: {
    ArrowUpLeftIcon,
  },
};
</script>
