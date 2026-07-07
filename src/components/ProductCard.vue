<template>
  <div class="w-full flex flex-col bg-white rounded-2xl p-4">
    <img src="@/assets/piston.jpg" alt="" class="w-full h-400px object-cover rounded-2xl" />
    <div class="flex flex-col">
      <h2 class="text-black text-2xl font-bold my-2">پیس</h2>
      <div class="flex items-center">
        <span
          class="text-2xl font-bold"
          :class="discountPrice ? 'line-through text-[#929292]' : 'text-black'"
          >120000</span
        >
        <div v-if="discountPrice" class="text-gray text-2xl font-bold">
          <span>850000</span>
        </div>
        <span class="text-gray text-sm font-bold">تومان</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    discountPrice: {
      type: Boolean,
      default: 0,
    },
  },
};
</script>
