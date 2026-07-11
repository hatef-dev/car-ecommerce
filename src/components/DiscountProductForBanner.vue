<template>
  <div class="container">
    <div
      class="w-full bg-white rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3 p-6 md:p-10"
    >
      <div
        class="flex flex-col gap-y-5 md:gap-y-10 text-center md:text-right items-center md:items-start"
      >
        <div class="flex gap-x-4 items-center">
          <div class="w-16 rounded-2xl h-1 bg-red-500"></div>
          <span class="text-red-500 text-xl font-semibold">در تخفیف</span>
        </div>
        <h3 class="text-xl sm:text-2xl lg:text-4xl">رینگ چرخ مدل صلیبی کد KW004 سایز 15 اینچ</h3>
        <ButtonComponent type="red">مشاهده بیشتر</ButtonComponent>
      </div>
      <div
        class="flex justify-center md:justify-end items-center md:items-end order-first md:order-last"
      >
        <img
          src="@/assets/testProduct.webp"
          class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
