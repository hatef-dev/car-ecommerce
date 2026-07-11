<template>
  <div class="container mt-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
      <div class="col-span-1 flex flex-col gap-y-5">
        <h1 class="text-3xl sm:text-4xl w-full sm:w-full md:w-4/5 font-semibold">
          با آخرین مقالات و مطالب تخصصی وبلاگ ما همراه باشید
        </h1>
        <p class="text-lg sm:text-base font-medium w-full sm:w-full md:w-4/5">
          با جدیدترین مطالب، راهنماها و نکات تخصصی دنیای خودرو همراه باشید. در وبلاگ ما، اطلاعات
          کاربردی درباره نگهداری خودرو، معرفی قطعات یدکی، بررسی محصولات و جدیدترین اخبار صنعت خودرو
          را با شما به اشتراک می‌گذاریم تا همیشه انتخابی آگاهانه‌تر و مطمئن‌تر داشته باشید.
        </p>
      </div>
      <div class="w-full">
        <ArticleList />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList.vue";

export default {
  name: "Comments",
  components: {
    ArticleList,
  },
};
</script>
