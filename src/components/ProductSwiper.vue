<template>
  <div class="relative">
    <div class="flex justify-end mb-4">
      <div class="swiper-button-prev-next flex justify-between items-center gap-x-4 py-4">
        <div @click="prevSlide" class="group mx-10 cursor-pointer">
          <div
            class="w-12 h-12 rounded-full bg-[#2a2a2a] transition-all duration-300 ease-in-out px-3 group-hover:bg-yellow-500 flex items-center justify-center"
          >
            <svg
              width="10"
              height="10"
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

        <div @click="nextSlide" class="group cursor-pointer">
          <div
            class="w-12 h-12 rounded-full bg-[#2a2a2a] transition-all duration-300 ease-in-out px-3 group-hover:bg-yellow-500 flex items-center justify-center"
          >
            <svg
              width="10"
              height="10"
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
        </div>
      </div>
    </div>

    <swiper
      :slides-per-view="1"
      :space-between="50"
      :centered-slides="false"
      :loop="true"
      :breakpoints="{
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: slideshow, spaceBetween: 20 },
      }"
      @swiper="onSwiperInit"
    >
      <swiper-slide class="text-white">
        <ProductCard discountPrice="1" />
      </swiper-slide>
      <swiper-slide class="text-white">
        <ProductCard discountPrice="1" />
      </swiper-slide>
      <swiper-slide class="text-white">
        <ProductCard discountPrice="1" />
      </swiper-slide>
      <swiper-slide class="text-white">
        <ProductCard />
      </swiper-slide>
      <swiper-slide class="text-white">
        <ProductCard />
      </swiper-slide>
      <swiper-slide class="text-white">
        <ProductCard />
      </swiper-slide>
      <swiper-slide class="text-white">
        <ProductCard />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "@/assets/swiperProduct.css";

export default {
  name: "ProductSwiper",
  components: { Swiper, SwiperSlide, ProductCard },
  props: {
    slideshow: {
      type: Number,
      default: 5,
    },
  },

  data() {
    return {
      swiperInstance: null, // نمونه اختصاصی همین اسلایدر اینجا ذخیره می‌شود
    };
  },

  methods: {
    // ذخیره کردن نمونه اسلایدر هنگام لود شدن
    onSwiperInit(swiper) {
      this.swiperInstance = swiper;
    },
    nextSlide() {
      if (this.swiperInstance) {
        // برای نسخه‌های جدید سوئیپر در حالت Loop
        if (typeof this.swiperInstance.slideNextLoop === "function") {
          this.swiperInstance.slideNextLoop();
        } else {
          this.swiperInstance.slideNext();
        }
      }
    },
    prevSlide() {
      if (this.swiperInstance) {
        // برای نسخه‌های جدید سوئیپر در حالت Loop
        if (typeof this.swiperInstance.slidePrevLoop === "function") {
          this.swiperInstance.slidePrevLoop();
        } else {
          this.swiperInstance.slidePrev();
        }
      }
    },
  },
};
</script>
