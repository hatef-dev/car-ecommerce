<template>
  <section class="py-16">
    <div class="container px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Revealonscroll>
          <div class="relative">
            <img
              src="@/assets/carEngine.webp"
              alt="Company Story"
              class="w-full rounded-2xl shadow-lg"
            />
            <div
              class="absolute -bottom-6 -right-6 bg-yellow-400 text-black px-6 py-4 rounded-2xl font-bold shadow-lg"
            >
              از سال ۱۳۹۲
            </div>
          </div>
        </Revealonscroll>

        <Revealonscroll>
          <div class="flex flex-col gap-y-6">
            <h2 class="text-3xl font-bold">داستان شما با ما شروع می‌شود</h2>
            <p class="text-gray-600 text-lg leading-relaxed">
              در تاریخ ۱۳۹۲، با ایده‌ای بی‌نظیر و شوری در دل تیمی از متخصصین ماشین‌ساز، شروع به کار
              کردیم. هدف ما از ابتدا، ایجاد یک پلتفرمی بود که نه تنها قطعات یدکی باکیفیت را عرضه
              می‌کرد، بلکه دانش و تجربه‌مان را به مشتریانمان منتقل می‌کرد.
            </p>
            <div class="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-6">
              <InfoItem>
                <template #icon>
                  <svg
                    class="w-6 h-6 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6l4 2"
                    />
                  </svg>
                </template>
                <template #title>زمان مناسب</template>
                <template #desc>تحویل در ۲۴ ساعت</template>
              </InfoItem>
              <InfoItem>
                <template #icon>
                  <svg
                    class="w-6 h-6 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                </template>
                <template #title>کیفیت تضمینی</template>
                <template #desc>گارانتی بر تمام محصولات</template>
              </InfoItem>
            </div>
          </div>
        </Revealonscroll>
      </div>
    </div>
  </section>
</template>

<script>
import Revealonscroll from "@/components/Revealonscroll.vue";
import InfoItem from "./InfoItem.vue";

export default {
  name: "AboutStory",
  components: { Revealonscroll, InfoItem },
};
</script>
