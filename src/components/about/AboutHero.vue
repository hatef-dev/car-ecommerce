<template>
  <section class="bg-black text-white py-16 sm:py-20">
    <div class="container px-4 sm:px-6">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          درباره <span class="text-yellow-400">ما</span>
        </h1>
        <p class="text-lg sm:text-xl text-gray-300 mb-8">
          با بیش از ۱۰ سال تخصص در زمینه توزیع و فروش قطعات یدکی خودرو، ما به شما کمک می‌کنیم تا
          با اطمینان و کیفیت بالا، قطعات مورد نیاز خود را پیدا کنید.
        </p>
        <ButtonComponent to="/contact" class="inline-block">
          تماس با ما
        </ButtonComponent>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponent from "@/components/Button.vue";
export default {
  name: "AboutHero",
  components: { ButtonComponent },
};
</script>