<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center">
    <div class="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <svg class="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5.128 17.804A9 9 0 1118.872 6.196M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M2.25 6.75v4a3 3 0 003 3h15a3 3 0 003-3v-4a3 3 0 00-3-3h-15a3 3 0 00-3 3z" />
      </svg>
    </div>
    <h3 class="font-bold text-lg mb-1">{{ name }}</h3>
    <p class="text-yellow-400 text-sm mb-3">{{ position }}</p>
    <p class="text-gray-600 text-xs">{{ bio }}</p>
  </div>
</template>

<script>
export default {
  name: "TeamMemberCard",
  props: {
    name: { type: String, required: true },
    position: { type: String, required: true },
    bio: { type: String, required: true },
  },
};
</script>