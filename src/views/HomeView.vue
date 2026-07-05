<template>
  <div class="flex flex-col gap-y-2">
    <Header />
    <Banner />
    <div class="flex flex-col gap-y-4 mt-10 container">
      <div class="flex flex-col gap-y-6 justify-center items-center">
        <h1 class="text-black font-light text-4xl">
          خرید با <span class="font-semibold">دسته بندی</span>
        </h1>
        <p class="text-[#575757] text-center text-lg w-2xl">
          قطعه یدکی مناسب خودروی خود را سریع‌تر پیدا کنید؛ با دسته‌بندی‌هایی هوشمند که انتخاب را
          آسان‌تر از همیشه می‌کنند.
        </p>
      </div>
      <div class="w-full grid grid-cols-2 h-[500px]">
        <div class="grid grid-cols-3">
          <div class="col-span-2 flex justify-between flex-col h-full bg-white rounded-2xl p-6">
            <div
              class="w-16 h-16 rounded-full bg-[#f7f7f7] flex justify-center items-center flex-col"
            >
              <WrenchScrewdriverIcon class="w-8 h-8" />
            </div>
            <div class="flex justify-between">
              <div class="flex flex-col gap-y-4">
                <h2 class="text-black font-semibold text-3xl">قطعات موتوری</h2>
                <span class="text-[#575757] text-base"> قطعه موتوری خودروی را بیشتر ببینید </span>
              </div>
            </div>
          </div>
          <div class="col-span-1"></div>
        </div>
        <div class="grid grid-cols-3">
          <div class="col-span-2 flex flex-col"></div>
          <div class="col-span-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import { WrenchScrewdriverIcon } from "@heroicons/vue/24/outline";
export default {
  name: "HomeView",
  components: {
    Header,
    Banner,
    WrenchScrewdriverIcon,
  },
};
</script>
