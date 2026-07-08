<template>
  <div class="relative">
    <div class="flex justify-end mb-4">
      <div class="swiper-button-prev-next flex justify-between items-center gap-x-4 py-4">
        <div class="swiper-button-prev group mx-10">
          <div
            class="w-12 h-12 rounded-full bg-[#2a2a2a] transition-all duration-300 ease-in-out px-3 group-hover:bg-yellow-500"
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

        <div class="swiper-button-next group">
          <div
            class="w-12 h-12 rounded-full bg-[#2a2a2a] transition-all duration-300 ease-in-out px-3 group-hover:bg-yellow-500"
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
      class=""
      :slides-per-view="1"
      :space-between="50"
      :centered-slides="false"
      :loop="true"
      :breakpoints="{
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 5, spaceBetween: 20 },
      }"
      :modules="modules"
      :navigation="navigation"
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
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/swiperProduct.css";

export default {
  name: "ProductSwiper",
  components: { Swiper, SwiperSlide, ProductCard },
  props: {
    border: {
      type: Boolean,
      default: true,
    },
    paddingY: {
      type: String,
      default: "0px",
    },
  },
  data() {
    return {
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
  },
  computed: {
    paddingYClass() {
      return `py-[${this.paddingY}]`;
    },
  },
};
</script>
