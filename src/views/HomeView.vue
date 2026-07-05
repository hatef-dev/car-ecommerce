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
      <div class=""></div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
export default {
  components: {
    Header,
    Banner,
  },
};
</script>
