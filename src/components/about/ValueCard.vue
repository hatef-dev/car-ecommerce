<template>
  <div class="bg-black/5 rounded-2xl p-6 text-center">
    <h3 class="font-bold text-xl mb-3 text-white">{{ title }}</h3>
    <p class="text-gray-400 text-sm">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "ValueCard",
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
};
</script>