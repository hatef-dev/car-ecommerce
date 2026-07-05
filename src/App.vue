<template>
  <div dir="rtl" v-persian-digits class="bg-[#f3f3f3]">
    <router-view :key="$route.path" />
  </div>
</template>
<script>
export default { name: "App" };
</script>
