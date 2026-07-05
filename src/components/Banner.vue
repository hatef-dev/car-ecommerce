<template>
  <div class="container">
    <div class="grid grid-cols-3 gap-x-2">
      <div class="flex flex-col gap-y-2 col-span-1">
        <div
          class="bg-linear-to-b rounded-2xl p-6 from-0% to-50% from-gray-400 flex flex-col gap-y-4 w-full"
        >
          <div class="space-x-1.5">
            <span class="text-white">30%</span>
            <span class="text-yellow-200">تخفیف بزرگ</span>
          </div>
          <p class="text-4xl text-gray-400/60">
            <span class="text-white">رینگ‌ های </span>مدرن خودرو تا
            <span class="text-white">۲۵٪ تخفیف </span>
          </p>
          <Button class="">خرید</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  name: "Banner",
  components: {
    Button,
  },
};
</script>
