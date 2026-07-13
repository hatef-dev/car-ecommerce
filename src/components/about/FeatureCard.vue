<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
    <div class="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mb-4">
      <component :is="iconComponent" class="w-6 h-6 text-yellow-400" />
    </div>
    <h3 class="font-bold text-lg mb-2">{{ title }}</h3>
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </div>
</template>

<script>
import {
  ShieldCheckIcon,
  TruckIcon,
  ClockIcon,
  CreditCardIcon,
} from "@heroicons/vue/24/outline";

export default {
  name: "FeatureCard",
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  computed: {
    iconComponent() {
      const icons = {
        "shield-check": ShieldCheckIcon,
        "truck": TruckIcon,
        "clock": ClockIcon,
        "credit-card": CreditCardIcon,
      };
      return icons[this.icon] || ShieldCheckIcon;
    },
  },
};
</script>