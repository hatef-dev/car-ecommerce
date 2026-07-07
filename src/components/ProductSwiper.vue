<template>
  <div class="relative">
    <swiper
      class="border-y border-white/20"
      :slides-per-view="1"
      :space-between="50"
      :centered-slides="false"
      :loop="true"
      :breakpoints="{
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 5, spaceBetween: 50 },
      }"
      :modules="modules"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
      <swiper-slide class="text-white py-8">
        <div class="bg-gray-800 rounded-xl p-4 text-center h-full">Slide 1</div>
      </swiper-slide>
      <swiper-slide class="text-white py-8">
        <div class="bg-gray-800 rounded-xl p-4 text-center h-full">Slide 2</div>
      </swiper-slide>
      <swiper-slide class="text-white py-8">
        <div class="bg-gray-800 rounded-xl p-4 text-center h-full">Slide 3</div>
      </swiper-slide>
      <swiper-slide class="text-white py-8">
        <div class="bg-gray-800 rounded-xl p-4 text-center h-full">Slide 4</div>
      </swiper-slide>
      <swiper-slide class="text-white py-8">
        <div class="bg-gray-800 rounded-xl p-4 text-center h-full">Slide 5</div>
      </swiper-slide>
      <swiper-slide class="text-white py-8">
        <div class="bg-gray-800 rounded-xl p-4 text-center h-full">Slide 6</div>
      </swiper-slide>
      <swiper-slide class="text-white py-8">
        <div class="bg-gray-800 rounded-xl p-4 text-center h-full">Slide 7</div>
      </swiper-slide>
      <swiper-slide class="text-white py-8">
        <div class="bg-gray-800 rounded-xl p-4 text-center h-full">Slide 8</div>
      </swiper-slide>
    </swiper>
    <div class="flex mt-4">
      <div
        class="swiper-button-prev-next shrink-0 border px-8 w-[160px] flex justify-between items-center gap-x-5 py-4 border-white/40"
      >
        <div
          class="swiper-button-prev text-white flex items-center justify-center cursor-pointer hover:text-yellow-400 transition-colors"
        >
          <svg
            width="16"
            height="16"
            class="-rotate-90"
            data-name="1-Arrow Up"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"
            />
          </svg>
        </div>
        <div class="w-[0.5px] h-full bg-white/40"></div>
        <div
          class="swiper-button-next text-white flex items-center justify-center cursor-pointer hover:text-yellow-400 transition-colors"
        >
          <svg
            width="16"
            height="16"
            class="rotate-90"
            data-name="1-Arrow Up"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/swiperProduct.css";

export default {
  name: "ProductSwiper",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
