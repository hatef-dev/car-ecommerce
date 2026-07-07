<template>
  <div class="flex flex-col gap-y-2">
    <Header />
    <Banner />
    <div class="flex flex-col gap-y-4 my-10 container">
      <div class="flex flex-col gap-y-6 justify-center items-center">
        <h1 class="text-black font-light text-4xl">
          خرید با <span class="font-semibold">دسته بندی</span>
        </h1>
        <p class="text-[#575757] text-center text-lg w-2xl">
          قطعه یدکی مناسب خودروی خود را سریع‌تر پیدا کنید؛ با دسته‌بندی‌هایی هوشمند که انتخاب را
          آسان‌تر از همیشه می‌کنند.
        </p>
      </div>
      <div class="w-full grid grid-cols-2 h-[480px] gap-x-2">
        <div class="gap-x-2 flex">
          <router-link
            to="/motor-parts"
            class="group w-7/12 cursor-pointer hover:bg-black transition-all duration-300 flex justify-between flex-col h-full bg-white rounded-4xl p-6"
          >
            <div
              class="w-16 h-16 rounded-full bg-[#f7f7f7] group-hover:bg-[#171717] transition-all duration-300 flex justify-center items-center flex-col"
            >
              <WrenchScrewdriverIcon class="w-8 h-8 group-hover:text-white" />
            </div>

            <div class="flex flex-col gap-y-4">
              <h2
                class="text-black font-semibold text-3xl transition-all duration-300 group-hover:text-white"
              >
                قطعات موتوری
              </h2>
              <div class="flex justify-between items-center">
                <span class="text-[#575757] text-base"> قطعه موتوری خودروی را بیشتر ببینید </span>
                <div
                  class="w-12 group-hover:scale-120 group bg-[#000000] group-hover:bg-[#171717] transition-all duration-300 h-12 rounded-full flex justify-center items-center flex-col"
                >
                  <ArrowLeftIcon class="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </router-link>

          <router-link
            to="/motor-parts"
            class="w-5/12 group relative cursor-pointer hover:bg-black transition-all duration-300 flex justify-between flex-col h-full bg-white rounded-4xl p-6"
          >
            <div class="flex flex-col gap-y-4">
              <h2
                class="text-black font-semibold text-3xl transition-all duration-300 group-hover:text-white"
              >
                قطعات موتوری
              </h2>
              <div class="flex justify-between items-center">
                <span class="text-[#575757] text-base"> قطعه موتوری خودروی را بیشتر ببینید </span>
              </div>
            </div>
            <div class="flex justify-end">
              <div
                class="w-12 group-hover:scale-120 group bg-[#000000] group-hover:bg-[#171717] transition-all duration-300 h-12 rounded-full flex justify-center items-center flex-col"
              >
                <ArrowLeftIcon class="w-6 h-6 text-white" />
              </div>
            </div>
          </router-link>
        </div>
        <div class="grid grid-cols-3 gap-x-2 gap-y-2">
          <div class="col-span-1 flex flex-col">
            <router-link
              to="/motor-parts"
              class="w-full group relative cursor-pointer hover:bg-black transition-all duration-300 flex justify-between flex-col h-full bg-white rounded-4xl p-6"
            >
              <div class="flex flex-col gap-y-4">
                <h2
                  class="text-black font-semibold text-xl transition-all duration-300 group-hover:text-white"
                >
                  قطعات موتوری
                </h2>
                <div class="flex justify-between items-center">
                  <span class="text-[#575757] text-base"> قطعه موتوری خودروی را بیشتر ببینید </span>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-span-2">
            <router-link
              to="/motor-parts"
              class="w-full group relative cursor-pointer hover:bg-black transition-all duration-300 flex justify-between flex-col h-full bg-white rounded-4xl p-6"
            >
              <div class="flex flex-col gap-y-4">
                <h2
                  class="text-black font-semibold text-3xl transition-all duration-300 group-hover:text-white"
                >
                  قطعات موتوری
                </h2>
                <div class="flex justify-between items-center">
                  <span class="text-[#575757] text-base"> قطعه موتوری خودروی را بیشتر ببینید </span>
                </div>
              </div>
              <div class="flex justify-end">
                <div
                  class="w-12 group-hover:scale-120 group bg-[#000000] group-hover:bg-[#171717] transition-all duration-300 h-12 rounded-full flex justify-center items-center flex-col"
                >
                  <ArrowLeftIcon class="w-6 h-6 text-white" />
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-span-1 flex flex-col">
            <router-link
              to="/motor-parts"
              class="w-full group relative cursor-pointer hover:bg-black transition-all duration-300 flex justify-between flex-col h-full bg-white rounded-4xl p-6"
            >
              <div class="flex flex-col gap-y-4">
                <h2
                  class="text-black font-semibold text-xl transition-all duration-300 group-hover:text-white"
                >
                  قطعات موتوری
                </h2>
                <div class="flex justify-between items-center">
                  <span class="text-[#575757] text-base"> قطعه موتوری خودروی را بیشتر ببینید </span>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-span-1 flex flex-col">
            <router-link
              to="/motor-parts"
              class="w-full group relative cursor-pointer hover:bg-black transition-all duration-300 flex justify-between flex-col h-full bg-white rounded-4xl p-6"
            >
              <div class="flex flex-col gap-y-4">
                <h2
                  class="text-black font-semibold text-xl transition-all duration-300 group-hover:text-white"
                >
                  قطعات موتوری
                </h2>
                <div class="flex justify-between items-center">
                  <span class="text-[#575757] text-base"> قطعه موتوری خودروی را بیشتر ببینید </span>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-span-1 flex flex-col">
            <router-link
              to="/motor-parts"
              class="w-full group relative cursor-pointer flex flex-col gap-y-4 justify-center items-center hover:bg-yellow-300 transition-all duration-300 h-full bg-white rounded-4xl p-6"
            >
              <div
                class="w-10 group-hover:scale-120 group bg-[#000000] group-hover:bg-[#171717] transition-all duration-300 h-10 rounded-full flex justify-center items-center flex-col"
              >
                <ArrowUpLeftIcon class="w-4 h-4 text-white" />
              </div>
              <h4>مشاهده همه</h4>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="py-20 bg-black relative">
      <div class="container flex flex-col gap-y-3">
        <h2 class="text-white font-semibold text-4xl">قطعات پر تقاضا</h2>
        <p class="w-2xl text-[#848484] text-lg">
          قطعه یدکی مناسب خودروی خود را سریع‌تر<span class="text-white">
            پیدا کنید؛ با دسته‌بندی‌های منظم و کاربردی که برای جست‌وجویی آسان</span
          >
          طراحی شده‌اند
        </p>
        <ProductSwiper></ProductSwiper>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import { WrenchScrewdriverIcon } from "@heroicons/vue/24/outline";
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";
import { ArrowUpLeftIcon } from "@heroicons/vue/24/outline";
import ProductSwiper from "@/components/ProductSwiper.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Banner,
    WrenchScrewdriverIcon,
    ArrowLeftIcon,
    ArrowUpLeftIcon,
    ProductSwiper,
  },
};
</script>
