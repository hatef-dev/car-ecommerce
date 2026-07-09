<template>
  <div v-for="brand in brands">
    <div
      class="bg-white rounded-3xl p-5 sm:p-6 flex justify-center items-center flex-col min-h-[140px]"
    >
      <img :src="brand.logo" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandsLogos",
  data() {
    return {
      brands: [
        {
          name: "Brand 1",
          logo: "/brand1.png",
        },
        {
          name: "Brand 2",
          logo: "/brand2.png",
        },
        {
          name: "Brand 3",
          logo: "/brand3.png",
        },
        {
          name: "Brand 4",
          logo: "/brand1.png",
        },
        {
          name: "Brand 5",
          logo: "/brand2.png",
        },
        {
          name: "Brand 6",
          logo: "/brand3.png",
        },
        {
          name: "Brand 7",
          logo: "/brand1.png",
        },
        {
          name: "Brand 8",
          logo: "/brand2.png",
        },
      ],
    };
  },
};
</script>
