<template>
  <div class="relative">
    <div class="flex items-center mb-4" :class="title ? 'justify-between' : 'justify-end'">
      <h2 v-if="title" class="text-black font-semibold text-2xl sm:text-3xl">
        {{ title }}
      </h2>
      <div class="swiper-button-prev-next flex justify-between items-center gap-x-4 py-4">
        <div :class="prevClass" class="group mx-2">
          <div
            class="w-12 h-12 flex justify-center text-white items-center rounded-full bg-[#2a2a2a] transition-all duration-300 ease-in-out px-3 group-hover:bg-yellow-500"
          >
            <svg
              width="20"
              height="20"
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

        <div :class="nextClass" class="group">
          <div
            class="w-12 h-12 flex text-white justify-center items-center rounded-full bg-[#2a2a2a] transition-all duration-300 ease-in-out px-3 group-hover:bg-yellow-500"
          >
            <svg
              width="20"
              height="20"
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
      :loop="false"
      :breakpoints="{
        480: { slidesPerView: 1.5, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 16 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
        1280: { slidesPerView: slideshow, spaceBetween: 24 },
      }"
      :modules="modules"
      :navigation="navigation"
    >
      <swiper-slide v-for="item in displayProducts" :key="item.link || item.id" class="text-white">
        <ProductCard
          :title="item.title"
          :image="item.image"
          :price="item.price"
          :discountPrice="item.discountPrice"
          :link="item.link"
        />
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

let instanceCounter = 0;

export default {
  name: "ProductSwiper",
  components: { Swiper, SwiperSlide, ProductCard },
  props: {
    slideshow: {
      type: Number,
      default: 5,
    },
    products: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
  },

  data() {
    instanceCounter += 1;
    const uid = `swiper-${instanceCounter}`;
    return {
      modules: [Navigation],
      uid,
    };
  },

  computed: {
    prevClass() {
      return `swiper-button-prev-${this.uid}`;
    },
    nextClass() {
      return `swiper-button-next-${this.uid}`;
    },
    navigation() {
      return {
        nextEl: `.${this.nextClass}`,
        prevEl: `.${this.prevClass}`,
      };
    },
    // اگه products از بیرون پاس داده نشه، همون حالت قبلی (۷ کارت نمونه) نمایش داده می‌شه
    displayProducts() {
      if (this.products && this.products.length) return this.products;
      return [
        { id: 1, discountPrice: "100000" },
        { id: 2, discountPrice: "1" },
        { id: 3, discountPrice: "1" },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
      ];
    },
  },
};
</script>
