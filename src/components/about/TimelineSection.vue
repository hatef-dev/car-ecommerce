<template>
  <section class="bg-gray-50 py-16">
    <div class="container px-4 sm:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">سفر ما</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          مهمانی ما در مسیر رشد و تحول.
        </p>
      </div>
      <div class="max-w-4xl mx-auto">
        <CompanyTimeline />
      </div>
    </div>
  </section>
</template>

<script>
import CompanyTimeline from "./CompanyTimeline.vue";

export default {
  name: "TimelineSection",
  components: { CompanyTimeline },
};
</script>