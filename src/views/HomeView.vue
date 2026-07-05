<template>
  <div class="flex flex-col gap-y-2">
    <Header />
    <Banner />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
export default {
  components: {
    Header,
    Banner,
  },
};
</script>
