<template>
  <div class="container">
    <swiper
      :spaceBetween="30"
      :slides-per-view="1"
      :centered-slides="false"
      :loop="false"
      :breakpoints="{
        480: { slidesPerView: 1, spaceBetween: 16 },
        640: { slidesPerView: 1, spaceBetween: 16 },
        768: { slidesPerView: 1, spaceBetween: 20 },
        1024: { slidesPerView: 2, spaceBetween: 20 },
        1280: { slidesPerView: 2, spaceBetween: 24 },
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in 9" :key="item">
        <DiscountProductForBanner />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import DiscountProductForBanner from "./DiscountProductForBanner.vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    DiscountProductForBanner,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
