<template>
  <div class="w-full flex flex-col bg-white rounded-2xl p-4">
    <img src="@/assets/piston.png" alt="" class="w-full px-10 py-5 object-cover rounded-2xl" />
    <div class="flex flex-col gap-y-4">
      <h2 class="text-black text-lg font-semibold my-2">
        {{ title }}
      </h2>
      <div class="flex items-center" :class="discountPrice ? 'gap-x-3' : 'gap-x-1'">
        <span
          class="text-base font-bold"
          :class="discountPrice ? 'line-through text-[#929292]' : 'text-black'"
          >{{ price }}</span
        >
        <div v-if="discountPrice" class="text-base text-black font-bold space-x-1">
          <span>{{ discountPrice }}</span>
          <span class="text-sm font-bold text-red-900">تومان</span>
        </div>
        <span v-if="!discountPrice" class="text-sm font-bold text-red-900">تومان</span>
      </div>
      <ButtonComponent :to="link">
        <span class="text-xs">افزودن به سبد خرید</span>
      </ButtonComponent>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    discountPrice: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: "پیستون و بوش عظام کد 7327 مناسب برای پژو 405 مجموعه 4 عددی",
    },
    image: {
      type: String,
      default: "@/assets/piston.png",
    },
    price: {
      type: Number,
      default: 120000,
    },
    link: {
      type: String,
      default: "/",
    },
  },
};
</script>
