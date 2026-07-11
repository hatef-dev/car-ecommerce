<template>
  <footer class="bg-black pt-10 pb-2">
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-0 gap-x-10">
        <!-- Brand / About -->
        <div class="col-span-1">
          <h2 class="text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Truck Parts</h2>
          <p class="text-white text-sm sm:text-base">
            کیفیت، اعتماد و دوام، ارزش‌هایی هستند که در هر قطعه ارائه می‌کنیم تا تجربه‌ای مطمئن از
            خرید و رانندگی برای شما رقم بزنیم.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-span-1">
          <h3 class="text-white text-lg font-semibold mb-4">سریع‌ترین لینک‌ها</h3>
          <ul class="space-y-2">
            <li>
              <a href="/" class="text-gray-400 hover:text-white transition-colors text-sm">خانه</a>
            </li>
            <li>
              <a
                href="/motor-parts"
                class="text-gray-400 hover:text-white transition-colors text-sm"
                >قطعات موتوری</a
              >
            </li>
            <li>
              <a
                href="/truck-parts"
                class="text-gray-400 hover:text-white transition-colors text-sm"
                >قطعات کامیون</a
              >
            </li>
            <li>
              <a href="/articles" class="text-gray-400 hover:text-white transition-colors text-sm"
                >وبلاگ</a
              >
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div class="col-span-1">
          <h3 class="text-white text-lg font-semibold mb-4">پشتیبانی</h3>
          <ul class="space-y-2">
            <li>
              <a href="/contact" class="text-gray-400 hover:text-white transition-colors text-sm"
                >تماس با ما</a
              >
            </li>
            <li>
              <a href="/faq" class="text-gray-400 hover:text-white transition-colors text-sm"
                >سوالات متداول</a
              >
            </li>
            <li>
              <a href="/shipping" class="text-gray-400 hover:text-white transition-colors text-sm"
                >هزینه حمل و نقل</a
              >
            </li>
            <li>
              <a href="/returns" class="text-gray-400 hover:text-white transition-colors text-sm"
                >بازگشت کالا</a
              >
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="col-span-1">
          <h3 class="text-white text-lg font-semibold mb-4">خبرنامه</h3>
          <p class="text-gray-400 text-sm mb-4">جدیدترین محصولات و تخفیف‌ها را دریافت کنید</p>
          <form @submit.prevent="subscribe" class="flex flex-col sm:flex-row gap-2">
            <input
              v-model="email"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              class="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
            />
            <button
              type="submit"
              class="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors text-sm"
            >
              مبتکر شو!
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
        <div
          class="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm"
        >
          <p class="mb-4 sm:mb-0">© 2024 Truck Parts. All rights reserved.</p>
          <div class="flex space-x-4 sm:space-x-6">
            <a href="/privacy" class="hover:text-white transition-colors">حریم خصوصی</a>
            <a href="/terms" class="hover:text-white transition-colors">شرایط استفاده</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    subscribe() {
      if (this.email) {
        // Handle newsletter subscription
        alert("متشکرم! ایمیل شما ثبت شد.");
        this.email = "";
      }
    },
  },
};
</script>
