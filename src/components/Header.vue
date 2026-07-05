<template>
  <header class="container">
    <div class="flex justify-between items-center py-4 border-b border-gray-200 bg-white">
      <h1>logo</h1>
      <div class="flex items-center gap-x-4">
        <div
          class="w-12 text-black/60 h-12 rounded-full bg-gray-100 flex justify-center items-center"
        >
          <MagnifyingGlassIcon class="w-6 h-6" />
        </div>
        <div
          class="w-12 relative text-black/60 h-12 rounded-full bg-gray-100 flex justify-center items-center"
        >
          <ArchiveBoxIcon class="w-6 h-6" />
          <div
            class="bg-red-500 text-sm absolute -left-1 top-0 text-white w-4 h-4 rounded-full flex justify-center items-center"
          >
            1
          </div>
        </div>
        <div
          class="w-12 text-black/60 h-12 rounded-full bg-gray-100 flex justify-center items-center"
        >
          <HeartIcon class="w-6 h-6" />
        </div>
        <div class="flex items-center gap-x-3">
          <div
            class="w-12 text-black/60 h-12 rounded-full bg-gray-100 flex justify-center items-center"
          >
            <UserIcon class="w-6 h-6" />
          </div>
          <div class="flex flex-col">
            <h4 class="text-xs text-gray-400">خوش امدید</h4>
            <div class="flex items-center gap-x-2">
              <h4 class="text-base">اسم کاربر</h4>
              <ChevronDownIcon class="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container relative"
      @mouseleave="
        activeMenuItem = null;
        activeSidebarItem = null;
      "
    >
      <ul class="flex items-center gap-x-1 py-4">
        <li
          v-for="item in menuItems"
          :key="item.link"
          class="relative group"
          @mouseenter="activeMenuItem = item"
        >
          <a
            :href="item.link"
            class="text-gray-700 px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-x-2 font-medium text-sm"
          >
            {{ item.title }}
            <ChevronDownIcon
              v-if="item.children"
              class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
            />
          </a>
          <!-- Dropdown for first level children -->
          <div
            v-if="item.children"
            class="dropdownItems bg-gradient-to-br from-white to-[#FCFCFC] rounded-b-3xl shadow-2xl shadow-black/5 overflow-hidden z-50 absolute top-full -right-4 w-[1100px] h-[420px] group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out transform translate-y-2 group-hover:translate-y-0"
          >
            <nav class="relative h-full flex w-full">
              <!-- Sidebar -->
              <div class="bg-white pt-4 pb-2 min-w-[260px] border-l border-gray-100">
                <div class="px-4 mb-2">
                  <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">{{
                    item.title
                  }}</span>
                </div>
                <ul class="flex flex-col px-2">
                  <li
                    v-for="child in item.children"
                    :key="child.link"
                    class="group relative flex items-center gap-x-3 justify-between py-3 px-3 rounded-xl transition-all duration-300 ease-in-out text-[#403F4C] cursor-pointer"
                    :class="
                      activeSidebarItem?.link === child.link ? 'bg-gray-100/80' : 'hover:bg-gray-50'
                    "
                    @mouseenter="activeSidebarItem = child"
                  >
                    <a :href="child.link" class="flex-1 font-medium text-sm">{{ child.title }}</a>
                    <!-- Left arrow for RTL -->
                    <ChevronLeftIcon
                      v-if="child.children"
                      class="w-4 h-4 transition-all duration-300"
                      :class="
                        activeSidebarItem?.link === child.link
                          ? 'opacity-100'
                          : 'opacity-0 text-gray-400 group-hover:opacity-100'
                      "
                    />
                    <!-- Active indicator -->
                  </li>
                </ul>
              </div>
              <!-- Main content area -->
              <div class="flex-1 p-8 overflow-hidden relative">
                <!-- Decorative elements -->
                <div
                  class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"
                ></div>
                <div
                  class="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl"
                ></div>
                <div
                  class="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100/30 rounded-full blur-3xl"
                ></div>

                <!-- Display active sidebar item's children -->
                <div v-if="activeSidebarItem" class="relative h-full">
                  <div class="mb-4">
                    <h3 class="text-lg font-bold text-gray-800 mb-1">
                      {{ activeSidebarItem.title }}
                    </h3>
                    <div
                      class="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                    ></div>
                  </div>

                  <!-- If has children, show grid -->
                  <div
                    v-if="activeSidebarItem.children"
                    class="grid grid-cols-2 gap-4 h-[calc(100%-80px)] overflow-y-auto pr-2"
                  >
                    <div
                      v-for="subChild in activeSidebarItem.children"
                      :key="subChild.link"
                      class="group"
                    >
                      <a
                        :href="subChild.link"
                        class="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div
                          class="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        >
                          <svg
                            class="w-5 h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                        <span
                          class="font-medium text-gray-700 group-hover:text-blue-600 transition-colors"
                          >{{ subChild.title }}</span
                        >
                      </a>
                    </div>
                  </div>

                  <!-- If no children, show just the link -->
                  <div v-else class="h-[calc(100%-80px)] flex items-center justify-center">
                    <a
                      :href="activeSidebarItem.link"
                      class="flex items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div
                        class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      >
                        <svg
                          class="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </div>
                      <span class="text-lg font-bold text-gray-800"
                        >رفتن به {{ activeSidebarItem.title }}</span
                      >
                    </a>
                  </div>
                </div>

                <!-- Fallback if no active sidebar item (show items without children as cards) -->
                <div v-else-if="item.children.some((c) => !c.children)" class="relative">
                  <h3 class="text-lg font-bold text-gray-800 mb-4">همه دسته‌بندی‌ها</h3>
                  <div class="grid grid-cols-3 gap-4">
                    <div
                      v-for="child in item.children.filter((c) => !c.children)"
                      :key="child.link"
                      class="group"
                    >
                      <a
                        :href="child.link"
                        class="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div
                          class="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        >
                          <svg
                            class="w-5 h-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                        <span
                          class="font-medium text-gray-700 group-hover:text-blue-600 transition-colors"
                          >{{ child.title }}</span
                        >
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Empty state -->
                <div
                  v-else
                  class="relative h-full flex flex-col items-center justify-center text-gray-400"
                >
                  <svg
                    class="w-24 h-24 text-gray-200 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    ></path>
                  </svg>
                  <p class="text-sm">یک برند را از سمت راست انتخاب کنید</p>
                </div>
              </div>
            </nav>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { ArchiveBoxIcon } from "@heroicons/vue/24/solid";
import { HeartIcon } from "@heroicons/vue/24/outline";
import { UserIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
export default {
  name: "Header",
  components: {
    MagnifyingGlassIcon,
    ArchiveBoxIcon,
    HeartIcon,
    UserIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
  },
  data() {
    return {
      activeMenuItem: true,
      activeSidebarItem: true,
      menuItems: [
        {
          title: "خودروها",
          link: "/vehicles",
          children: [
            {
              title: "MVM (ام‌وی‌ام)",
              link: "/vehicles/mvm",
              children: [
                { title: "MVM 110 / 110S", link: "/vehicles/mvm/110" },
                { title: "MVM 315 (Old / New)", link: "/vehicles/mvm/315" },
                { title: "MVM 530", link: "/vehicles/mvm/530" },
                { title: "MVM 550", link: "/vehicles/mvm/550" },
                { title: "MVM X22 / X22 Pro", link: "/vehicles/mvm/x22" },
                { title: "MVM X33 / X33S", link: "/vehicles/mvm/x33" },
                { title: "MVM X55 / X55 Pro", link: "/vehicles/mvm/x55" },
              ],
            },
            {
              title: "Chery (چری)",
              link: "/vehicles/chery",
              children: [
                { title: "Arrizo 5", link: "/vehicles/chery/arrizo5" },
                { title: "Arrizo 6", link: "/vehicles/chery/arrizo6" },
                { title: "Tiggo 5", link: "/vehicles/chery/tiggo5" },
                { title: "Tiggo 7", link: "/vehicles/chery/tiggo7" },
              ],
            },
          ],
        },
        {
          title: "دسته‌بندی قطعات",
          link: "/categories",
          children: [
            {
              title: "قطعات موتوری",
              link: "/categories/engine",
              children: [
                { title: "سرسیلندر", link: "/categories/engine/cylinder-head" },
                { title: "میل‌لنگ", link: "/categories/engine/crankshaft" },
                { title: "پیستون و رینگ موتور", link: "/categories/engine/piston" },
                { title: "شاتون", link: "/categories/engine/connecting-rod" },
                { title: "واشر سرسیلندر", link: "/categories/engine/cylinder-gasket" },
                { title: "واتر پمپ", link: "/categories/engine/water-pump" },
                { title: "سایر قطعات موتوری", link: "/categories/engine/others" },
              ],
            },
            {
              title: "سیستم تعلیق و فرمان",
              link: "/categories/suspension",
              children: [
                { title: "پمپ هیدرولیک فرمان", link: "/categories/suspension/steering-pump" },
                { title: "کابل حلزونی فرمان", link: "/categories/suspension/spiral-cable" },
                { title: "سایر قطعات تعلیق", link: "/categories/suspension/others" },
              ],
            },
            {
              title: "سیستم برقی و سنسورها",
              link: "/categories/electrical",
              children: [
                { title: "استارت کامل", link: "/categories/electrical/starter" },
                { title: "دینام کامل", link: "/categories/electrical/alternator" },
                { title: "سنسور اکسیژن", link: "/categories/electrical/oxygen-sensor" },
                { title: "سنسور میل سوپاپ و مپ", link: "/categories/electrical/sensors" },
                { title: "شمع موتور", link: "/categories/electrical/spark-plug" },
                { title: "سایر قطعات برقی", link: "/categories/electrical/others" },
              ],
            },
            {
              title: "گیربکس و کلاچ",
              link: "/categories/transmission",
              children: [
                { title: "بلبرینگ کلاچ", link: "/categories/transmission/clutch-bearing" },
                { title: "پمپ کلاچ", link: "/categories/transmission/clutch-pump" },
                { title: "سایر قطعات گیربکس", link: "/categories/transmission/others" },
              ],
            },
            {
              title: "سیستم تهویه و کولر",
              link: "/categories/cooling-heating",
              children: [
                { title: "کمپرسور کولر", link: "/categories/cooling-heating/compressor" },
                { title: "مقاومت بخاری", link: "/categories/cooling-heating/resistor" },
                { title: "هوزینگ و ترموستات", link: "/categories/cooling-heating/thermostat" },
                { title: "سایر قطعات تهویه", link: "/categories/cooling-heating/others" },
              ],
            },
          ],
        },
        {
          title: "برندها",
          link: "/brands",
        },
        {
          title: "وبلاگ",
          link: "/blog",
        },
        {
          title: "تماس با ما",
          link: "/contact",
        },
      ],
    };
  },
};
</script>
