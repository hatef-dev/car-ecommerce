<template>
  <div class="text-center py-8 bg-white rounded-2xl shadow-sm">
    <AnimatedCounter :end-value="endValue" class="text-4xl font-bold text-yellow-400 mb-2" />
    <p class="text-gray-600">{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: "StatItem",
  props: {
    endValue: { type: Number, required: true },
    label: { type: String, required: true },
  },
};
</script>
