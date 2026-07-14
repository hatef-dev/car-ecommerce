<template>
  <section class="bg-gray-50 py-16">
    <div class="px-4 sm:px-6">
      <Revealonscroll>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">سفر ما</h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">مهمانی ما در مسیر رشد و تحول.</p>
        </div>
      </Revealonscroll>
      <div class="max-w-4xl mx-auto">
        <Revealonscroll>
          <CompanyTimeline />
        </Revealonscroll>
      </div>
    </div>
  </section>
</template>

<script>
import Revealonscroll from "@/components/Revealonscroll.vue";
import CompanyTimeline from "./CompanyTimeline.vue";

export default {
  name: "TimelineSection",
  components: { Revealonscroll, CompanyTimeline },
};
</script>
