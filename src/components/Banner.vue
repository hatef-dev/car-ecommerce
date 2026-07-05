<template>
  <div class="container">
    <div class="grid grid-cols-3 gap-x-2">
      <div class="col-span-2 flex flex-col gap-x-1 bg-[#0a0a0a] rounded-2xl p-6 gap-y-8">
        <div class="space-x-1.5">
          <span class="text-white">30%</span>
          <span class="text-yellow-200">تخفیف بزرگ</span>
        </div>
        <div class="w-full flex justify-center items-center">
          <img src="@/assets/carbon-black.webp" class="w-2xl rotate-y-180" alt="" />
        </div>
        <div class="flex flex-col gap-y-4 col-span-1">
          <h1 class="text-white font-semibold text-3xl leading-20">
            قطعاتی که <span class="text-yellow-200"> دوام، کیفیت و اعتماد</span> را هم‌زمان به شما
            ارائه می‌دهند.
          </h1>
        </div>
        <div class="blurred-box rounded-2xl">
          <!--  you dont need the user-login-box html  -->
          <div class="text-white relative z-10 flex flex-col gap-y-4 py-6 px-4">
            <h3 class="text-xl text-white"><span class="text-[#575757]">انتخاب </span>ماشین شما</h3>
            <div class="flex justify-between items-center">
              <div class="flex flex-col gap-y-2">
                <label for="car-model" class="text-white/80 text-sm"> مدل</label>
                <select
                  id="car-model"
                  name="car-model"
                  class="w-64 h-12 bg-white/10 border border-white/20 text-white rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm cursor-pointer appearance-none"
                >
                  <option value="">مدل</option>
                </select>
              </div>
              <div class="flex flex-col gap-y-2">
                <label for="car-brand" class="text-white/80 text-sm"> برند</label>
                <select
                  id="car-brand"
                  name="car-brand"
                  class="w-64 h-12 bg-white/10 border border-white/20 text-white rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm cursor-pointer appearance-none"
                >
                  <option value="">برند</option>
                </select>
              </div>
              <div class="flex flex-col gap-y-2">
                <label for="car-year" class="text-white/80 text-sm">سال </label>
                <select
                  id="car-year"
                  name="car-year"
                  class="w-64 h-12 bg-white/10 border border-white/20 text-white rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all duration-300 backdrop-blur-sm cursor-pointer appearance-none"
                >
                  <option value="">سال</option>
                </select>
              </div>
            </div>
          </div>
          <!--  for demo purposes only and its shit  -->
        </div>
      </div>
      <div class="flex flex-col gap-y-2 col-span-1">
        <div
          class="bg-linear-to-b rounded-2xl p-6 from-0% to-25% from-gray-700 to-[#0a0a0a] flex flex-col gap-y-4 w-full"
        >
          <div class="space-x-1.5">
            <span class="text-white">30%</span>
            <span class="text-yellow-200">تخفیف بزرگ</span>
          </div>
          <p class="text-3xl text-yellow-400">
            <span class="text-white">رینگ‌ های </span>مدرن خودرو تا
            <span class="text-white">۲۵٪ تخفیف </span>
          </p>

          <Button type="dark">خرید</Button>
          <img class="w-64" :src="EnginePng" alt="" />
        </div>
        <div class="rounded-2xl p-6 bg-white flex flex-col justify-between gap-y-6">
          <div class="w-16 h-16 bg-[#f1f1f1] flex justify-center items-center rounded-full">
            <ShieldCheckIcon class="w-7 h-7" />
          </div>
          <div class="flex flex-col gap-y-4">
            <h3 class="text-black text-2xl">
              <span class="text-gray-700"> با بهترین </span> کیفیت
            </h3>
            <p class="text-base text-black">
              در دنیای ابزار و قطعات یدکی خودرو، کیفیت فقط یک ویژگی نیست، بلکه تضمینی است برای
              امنیت، دوام و آرامش در هر مسیری که با خودرو خود طی می‌کنید.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EnginePng from "@/assets/carEngine.webp";
import Button from "./Button.vue";
import { ShieldCheckIcon } from "@heroicons/vue/24/outline";
export default {
  name: "Banner",
  components: {
    Button,
    ShieldCheckIcon,
  },
  computed: {
    EnginePng() {
      return EnginePng;
    },
  },
};
</script>

<style scoped>
.blurred-box {
  position: relative;
  width: 100%;
  height: 100%;
  background: inherit;
  overflow: hidden;
}

.blurred-box:after {
  content: "";
  width: 100%;
  height: 100%;
  background: inherit;
  position: absolute;
  right: 0;

  bottom: 0;
  box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.05);
  filter: blur(10px);
}
</style>
