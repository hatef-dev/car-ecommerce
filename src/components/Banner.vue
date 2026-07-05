<template>
  <div class="container">
    <div class="grid grid-cols-3 gap-x-2">
      <div class="flex flex-col gap-y-2 col-span-1">
        <div
          class="bg-linear-to-b rounded-2xl p-6 from-0% to-50% from-gray-300 to-[#0a0a0a] flex flex-col gap-y-4 w-full"
        >
          <div class="space-x-1.5">
            <span class="text-white">30%</span>
            <span class="text-yellow-200">تخفیف بزرگ</span>
          </div>
          <p class="text-4xl text-yellow-400">
            <span class="text-white">رینگ‌ های </span>مدرن خودرو تا
            <span class="text-white">۲۵٪ تخفیف </span>
          </p>

          <Button type="dark">خرید</Button>
          <img class="w-72" :src="EnginePng" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EnginePng from "@/assets/carEngine.webp";
import Button from "./Button.vue";
export default {
  name: "Banner",
  components: {
    Button,
  },
  computed: {
    EnginePng() {
      return EnginePng;
    },
  },
};
</script>
