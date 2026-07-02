<template>
  <div dir="rtl" v-persian-digits>
    <router-view :key="$route.path" />
  </div>
</template>
<script>
export default { name: "App" };
</script>
