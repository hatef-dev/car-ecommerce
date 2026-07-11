<template>
  <div class="bg-white p-6 rounded-2xl">
    <div class="flex gap-x-10">
      <img src="@/assets/char.jpg" alt="char" class="w-24 h-24 rounded-full" />
      <div class="flex flex-col gap-y-6">
        <div class="flex flex-col gap-y-2">
          <h2 class="text-lg font-medium">{{ title }}</h2>
          <p class="text-sm font-medium">{{ date }}</p>
        </div>
        <router-link :to="link" class="text-black rounded-md inline-flex gap-x-2 items-center">
          <span>مشاهده همه</span>
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
