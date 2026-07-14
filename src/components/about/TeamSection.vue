<template>
  <section class="py-16">
    <div class="container px-4 sm:px-6">
      <Revealonscroll>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">تیم ما</h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            متخصصانی که با تخصص و پشتکار، خدمات ما را تضمین می‌کنند.
          </p>
        </div>
      </Revealonscroll>

      <Revealonscroll :stagger="0.12" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <TeamMemberCard
          name="مهندس رضا حسینی"
          position="مدیر فنی"
          bio="با بیش از ۱۵ سال تجربه در صنعت خودرو، خدمات فنی ما را تضمین می‌کند."
        />
        <TeamMemberCard
          name="سارا محمدی"
          position="مدیر محصول"
          bio="متخصص در انتخاب و معرفی بهترین قطعات یدکی بازار."
        />
        <TeamMemberCard
          name="محمد علی نژاد"
          position="مدیر فروش"
          bio="با رویکرد متمایز، رابطه عالی با مشتریان را حفظ می‌کند."
        />
        <TeamMemberCard
          name="کوثر رضایی"
          position="مدیر عملیات"
          bio="بهینه‌سازی فرآیندها و تضمین زمان تحویل."
        />
      </Revealonscroll>
    </div>
  </section>
</template>

<script>
import Revealonscroll from "@/components/Revealonscroll.vue";
import TeamMemberCard from "./TeamMemberCard.vue";

export default {
  name: "TeamSection",
  components: { Revealonscroll, TeamMemberCard },
};
</script>
