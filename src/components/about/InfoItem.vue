<template>
  <div class="flex items-center gap-x-3">
    <div class="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
      <slot name="icon" />
    </div>
    <div>
      <h3 class="font-bold text-lg">{{ title }}</h3>
      <p class="text-gray-500 text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoItem",
  props: {
    title: { type: String, default: "" },
    description: { type: String, default: "" },
  },
};
</script>