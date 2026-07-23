<template>
  <div class="flex flex-col gap-y-2">
    <Header />
    <Banner />
    <div class="flex flex-col gap-y-4 my-10 container px-4">
      <div class="flex flex-col gap-y-4 md:gap-y-6 justify-center items-center">
        <h1 class="text-black font-light text-2xl sm:text-3xl md:text-4xl text-center">
          خرید با <span class="font-semibold">دسته بندی</span>
        </h1>
        <p class="text-[#575757] text-center text-base md:text-lg max-w-xl md:max-w-2xl">
          قطعه یدکی مناسب خودروی خود را سریع‌تر پیدا کنید؛ با دسته‌بندی‌هایی هوشمند که انتخاب را
          آسان‌تر از همیشه می‌کنند.
        </p>
      </div>

      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        <!-- Left block -->
        <div class="flex flex-col sm:flex-row gap-2">
          <router-link
            to="/motor-parts"
            class="group w-full sm:w-7/12 cursor-pointer hover:bg-black transition-all duration-300 flex justify-between flex-col min-h-[220px] sm:min-h-[280px] lg:h-full bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-6"
          >
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#f7f7f7] group-hover:bg-[#171717] transition-all duration-300 flex justify-center items-center flex-col"
            >
              <WrenchScrewdriverIcon class="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-white" />
            </div>

            <div class="flex flex-col gap-y-3 sm:gap-y-4">
              <h2
                class="text-black font-semibold text-xl sm:text-2xl lg:text-3xl transition-all duration-300 group-hover:text-white"
              >
                قطعات موتوری
              </h2>
              <div class="flex justify-between items-center gap-2">
                <span class="text-[#575757] text-sm sm:text-base">
                  قطعه موتوری خودروی را بیشتر ببینید
                </span>
                <div
                  class="w-10 h-10 sm:w-12 sm:h-12 shrink-0 group-hover:scale-120 group bg-[#000000] group-hover:bg-[#171717] transition-all duration-300 rounded-full flex justify-center items-center flex-col"
                >
                  <ArrowLeftIcon class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </div>
          </router-link>

          <router-link
            to="/motor-parts"
            class="w-full sm:w-5/12 group relative cursor-pointer hover:bg-black transition-all duration-300 flex justify-between flex-col min-h-[180px] sm:min-h-[280px] lg:h-full bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-6"
          >
            <div class="flex flex-col gap-y-3 sm:gap-y-4">
              <h2
                class="text-black font-semibold text-xl sm:text-2xl lg:text-3xl transition-all duration-300 group-hover:text-white"
              >
                قطعات موتوری
              </h2>
              <span class="text-[#575757] text-sm sm:text-base">
                قطعه موتوری خودروی را بیشتر ببینید
              </span>
            </div>
            <div class="flex justify-end">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-120 group bg-[#000000] group-hover:bg-[#171717] transition-all duration-300 rounded-full flex justify-center items-center flex-col"
              >
                <ArrowLeftIcon class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </router-link>
        </div>

        <!-- Right block -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <router-link
            to="/motor-parts"
            class="col-span-1 group relative cursor-pointer hover:bg-black transition-all duration-300 flex justify-between flex-col min-h-[140px] bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-6"
          >
            <div class="flex flex-col gap-y-3 sm:gap-y-4">
              <h2
                class="text-black font-semibold text-lg sm:text-xl transition-all duration-300 group-hover:text-white"
              >
                قطعات موتوری
              </h2>
              <span class="text-[#575757] text-sm sm:text-base">
                قطعه موتوری خودروی را بیشتر ببینید
              </span>
            </div>
          </router-link>

          <router-link
            to="/motor-parts"
            class="col-span-2 group relative cursor-pointer hover:bg-black transition-all duration-300 flex justify-between flex-col min-h-[140px] bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-6"
          >
            <div class="flex flex-col gap-y-3 sm:gap-y-4">
              <h2
                class="text-black font-semibold text-xl sm:text-2xl lg:text-3xl transition-all duration-300 group-hover:text-white"
              >
                قطعات موتوری
              </h2>
              <span class="text-[#575757] text-sm sm:text-base">
                قطعه موتوری خودروی را بیشتر ببینید
              </span>
            </div>
            <div class="flex justify-end">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-120 group bg-[#000000] group-hover:bg-[#171717] transition-all duration-300 rounded-full flex justify-center items-center flex-col"
              >
                <ArrowLeftIcon class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </router-link>

          <router-link
            to="/motor-parts"
            class="col-span-1 group relative cursor-pointer hover:bg-black transition-all duration-300 flex justify-between flex-col min-h-[140px] bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-6"
          >
            <div class="flex flex-col gap-y-3 sm:gap-y-4">
              <h2
                class="text-black font-semibold text-lg sm:text-xl transition-all duration-300 group-hover:text-white"
              >
                قطعات موتوری
              </h2>
              <span class="text-[#575757] text-sm sm:text-base">
                قطعه موتوری خودروی را بیشتر ببینید
              </span>
            </div>
          </router-link>

          <router-link
            to="/motor-parts"
            class="col-span-1 group relative cursor-pointer hover:bg-black transition-all duration-300 flex justify-between flex-col min-h-[140px] bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-6"
          >
            <div class="flex flex-col gap-y-3 sm:gap-y-4">
              <h2
                class="text-black font-semibold text-lg sm:text-xl transition-all duration-300 group-hover:text-white"
              >
                قطعات موتوری
              </h2>
              <span class="text-[#575757] text-sm sm:text-base">
                قطعه موتوری خودروی را بیشتر ببینید
              </span>
            </div>
          </router-link>

          <router-link
            to="/motor-parts"
            class="col-span-1 group relative cursor-pointer flex flex-col gap-y-3 sm:gap-y-4 justify-center items-center hover:bg-yellow-300 transition-all duration-300 min-h-[140px] bg-white rounded-3xl sm:rounded-4xl p-5 sm:p-6"
          >
            <div
              class="w-9 h-9 sm:w-10 sm:h-10 group-hover:scale-120 group bg-[#000000] group-hover:bg-[#171717] transition-all duration-300 rounded-full flex justify-center items-center flex-col"
            >
              <ArrowUpLeftIcon class="w-4 h-4 text-white" />
            </div>
            <h4 class="text-sm sm:text-base">مشاهده همه</h4>
          </router-link>
        </div>
      </div>
    </div>
    <div class="py-20 bg-black relative">
      <div class="container flex flex-col gap-y-3">
        <h2 class="text-white font-semibold text-2xl sm:text-3xl md:text-4xl">قطعات پر تقاضا</h2>
        <p class="w-full max-w-xl md:max-w-2xl text-[#848484] text-base md:text-lg">
          قطعه یدکی مناسب خودروی خود را سریع‌تر<span class="text-white">
            پیدا کنید؛ با دسته‌بندی‌های منظم و کاربردی که برای جست‌وجویی آسان</span
          >
          طراحی شده‌اند
        </p>
        <ProductSwiper :slideshow="5"></ProductSwiper>
      </div>
    </div>
    <Categories class="my-10"></Categories>
    <DiscountBanner class="my-10 py-10"></DiscountBanner>
    <div class="my-10 container flex flex-col gap-y-10">
      <div class="flex items-center justify-center">
        <h3 class="text-5xl text-black font-semibold">برندهای منتخب ما</h3>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 items-center justify-center">
        <BrandsLogos />
      </div>
    </div>
    <div>
      <BannerSite />
    </div>
    <Articles class="my-48" />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import { WrenchScrewdriverIcon } from "@heroicons/vue/24/outline";
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";
import { ArrowUpLeftIcon } from "@heroicons/vue/24/outline";
import ProductSwiper from "@/components/ProductSwiper.vue";
import Categories from "@/components/Categories.vue";
import Footer from "@/components/Footer.vue";
import DiscountBanner from "@/components/DiscountBanner.vue";
import BrandsLogos from "@/components/BrandsLogos.vue";
import BannerSite from "@/components/BannerSite.vue";
import Articles from "@/components/Articles.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Banner,
    WrenchScrewdriverIcon,
    ArrowLeftIcon,
    ArrowUpLeftIcon,
    ProductSwiper,
    Categories,
    DiscountBanner,
    BrandsLogos,
    BannerSite,
    Articles,
    Footer,
  },
};
</script>
