<template>
  <div class="flex flex-col gap-y-2">
    <Header />
    <div class="container py-10">
      <h1 class="text-3xl font-bold mb-4">About Us</h1>
      <p class="text-gray-600">
        This is the about page. Content will be added here.
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "AboutView",
  components: {
    Header,
  },
};
</script>