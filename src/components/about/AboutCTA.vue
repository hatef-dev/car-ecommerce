<template>
  <section class="bg-yellow-400 py-16">
    <div class="container px-4 sm:px-6">
      <div class="text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">
          آماده شروع کار هستید؟
        </h2>
        <p class="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
          با ما تماس بگیرید یا یک مشاوره رایگان دریافت کنید. ما در هر مرحله از راهنمایی و پشتیبانی
          خود برای شما حضور داریم.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-y-4 sm:gap-y-0 sm:gap-x-4">
          <ButtonComponent to="/contact" type="dark">
            تماس با ما
          </ButtonComponent>
          <ButtonComponent to="/products" type="outline">
            مشاهده محصولات
          </ButtonComponent>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonComponent from "@/components/Button.vue";

export default {
  name: "AboutCTA",
  components: { ButtonComponent },
};
</script>