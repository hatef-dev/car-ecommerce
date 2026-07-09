<template>
  <div class="flex items-center gap-x-2">
    <div
      v-for="value in source"
      :key="value"
      class="bg-yellow-300 rounded-full w-12 h-12 flex justify-center items-center"
    >
      <span class="text-black">{{ value }}</span>
    </div>
  </div>
</template>
+
<script>
export default {
  name: "DiscountTimeLeft",
  props: {
    source: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
