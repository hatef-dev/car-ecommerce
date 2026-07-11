<template>
  <div class="container mt-10">
    <div class="grid grid-cols-2 gap-x-10">
      <div class="col-span-1 flex flex-col gap-y-5">
        <h1 class="text-3xl w-3/5 font-semibold">
          با آخرین مقالات و مطالب تخصصی وبلاگ ما همراه باشید
        </h1>
        <p class="text-lg font-medium w-4/5">
          با جدیدترین مطالب، راهنماها و نکات تخصصی دنیای خودرو همراه باشید. در وبلاگ ما، اطلاعات
          کاربردی درباره نگهداری خودرو، معرفی قطعات یدکی، بررسی محصولات و جدیدترین اخبار صنعت خودرو
          را با شما به اشتراک می‌گذاریم تا همیشه انتخابی آگاهانه‌تر و مطمئن‌تر داشته باشید.
        </p>
      </div>
      <div>
        <CommentsList />
      </div>
    </div>
  </div>
</template>

<script>
import CommentsList from "@/components/CommentsList.vue";

export default {
  name: "Comments",
  components: {
    CommentsList,
  },
};
</script>
