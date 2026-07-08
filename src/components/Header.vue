<template>
  <header class="bg-white">
    <header class="container">
      <div class="flex justify-between items-center py-4 border-b border-gray-200 bg-white">
        <div class="flex items-center gap-x-4">
          <h1>logo</h1>
          <button
            v-if="!isMobileMenuOpen"
            @click="openMobileMenu"
            class="sm:hidden flex items-center justify-center p-2 rounded-md"
          >
            <svg
              class="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex items-center gap-x-2 sm:gap-x-4">
          <div
            class="w-8 h-8 sm:w-12 sm:h-12 text-black/60 rounded-full bg-gray-100 flex justify-center items-center"
          >
            <MagnifyingGlassIcon class="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <div
            class="w-8 h-8 sm:w-12 sm:h-12 relative text-black/60 rounded-full bg-gray-100 flex justify-center items-center"
          >
            <ArchiveBoxIcon class="w-4 h-4 sm:w-6 sm:h-6" />
            <div
              class="bg-red-500 text-xs absolute -left-1 top-0 text-white w-3 h-3 sm:w-4 sm:h-4 rounded-full flex justify-center items-center"
            >
              1
            </div>
          </div>
          <div
            class="w-8 h-8 sm:w-12 sm:h-12 text-black/60 rounded-full bg-gray-100 flex justify-center items-center"
          >
            <HeartIcon class="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <div class="hidden sm:flex items-center gap-x-3">
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

      <!-- Mobile Menu Overlay -->
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-50 flex sm:hidden"
        @click.self="isMobileMenuOpen = false"
      >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/50"></div>

        <!-- Mobile Sidebar -->
        <div class="relative w-80 max-w-full h-full bg-white shadow-2xl overflow-y-auto">
          <div class="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 class="text-lg font-bold">منو</h2>
            <button @click="isMobileMenuOpen = false" class="p-2 rounded-md hover:bg-gray-100">
              <svg
                class="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <nav class="p-4">
            <ul class="space-y-2">
              <li v-for="item in menuItems" :key="item.link">
                <div>
                  <div
                    class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                    @click="!item.children ? null : handleMenuItemClick($event, item.link)"
                  >
                    <a
                      :href="item.link"
                      class="flex-1 font-medium text-gray-700"
                      @click="!item.children ? true : $event.preventDefault()"
                    >
                      {{ item.title }}
                    </a>
                    <ChevronDownIcon
                      v-if="item.children"
                      class="w-4 h-4 text-gray-400 transition-transform duration-200"
                      :class="{ 'rotate-180': openMobileItems.includes(item.link) }"
                    />
                  </div>

                  <!-- Mobile Submenu -->
                  <div
                    v-if="item.children && openMobileItems.includes(item.link)"
                    class="mt-2 mr-4 border-r border-gray-200 pr-4"
                  >
                    <ul class="space-y-1">
                      <li v-for="child in item.children" :key="child.link">
                        <div>
                          <div
                            class="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                            @click="
                              !child.children ? null : handleMenuItemClick($event, child.link)
                            "
                          >
                            <a
                              :href="child.link"
                              class="flex-1 text-sm text-gray-600"
                              @click="!child.children ? true : $event.preventDefault()"
                            >
                              {{ child.title }}
                            </a>
                            <ChevronDownIcon
                              v-if="child.children"
                              class="w-3 h-3 text-gray-400 transition-transform duration-200"
                              :class="{ 'rotate-180': openMobileItems.includes(child.link) }"
                            />
                          </div>

                          <!-- Mobile Sub-submenu -->
                          <div
                            v-if="child.children && openMobileItems.includes(child.link)"
                            class="mt-1 mr-4 border-r border-gray-100 pr-4"
                          >
                            <ul class="space-y-1">
                              <li v-for="subChild in child.children" :key="subChild.link">
                                <a
                                  :href="subChild.link"
                                  class="block p-2 text-xs text-gray-500 rounded-lg hover:bg-gray-50"
                                >
                                  {{ subChild.title }}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        class="container relative hidden sm:block"
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
            @mouseenter="
              activeMenuItem = item;
              activeSidebarItem = item.children?.[0] || null;
            "
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
              class="dropdownItems bg-gradient-to-br from-white to-[#FCFCFC] rounded-b-3xl shadow-2xl shadow-black/5 overflow-hidden z-50 absolute top-full -right-4 w-[90vw] sm:w-[1100px] h-[420px] opacity-0 invisible transition-all duration-500 ease-out transform translate-y-2"
              :class="{ 'opacity-100 visible translate-y-0': activeMenuItem?.link === item.link }"
            >
              <nav class="relative h-full flex w-full">
                <!-- Sidebar -->
                <div
                  class="bg-white pt-4 pb-2 min-w-[200px] sm:min-w-[260px] border-l border-gray-100"
                >
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
                        activeSidebarItem?.link === child.link
                          ? 'bg-gray-100/80'
                          : 'hover:bg-gray-100/80'
                      "
                      @mouseenter="activeSidebarItem = child"
                    >
                      <a :href="child.link" class="flex-1 font-medium text-sm">{{ child.title }}</a>
                      <!-- Left arrow for RTL -->
                      <ChevronLeftIcon
                        v-if="child.children"
                        class="w-4 h-4 transition-all duration-300 opacity-0"
                        :class="
                          activeSidebarItem?.link === child.link
                            ? 'opacity-100 transition-all duration-300'
                            : 'opacity-0 text-gray-400'
                        "
                      />
                      <!-- Active indicator -->
                    </li>
                  </ul>
                </div>
                <!-- Main content area -->
                <div class="flex-1 p-4 sm:p-8 overflow-hidden relative">
                  <!-- Decorative elements -->
                  <div
                    class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent"
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
                      <div class="w-12 h-1 bg-black/60 rounded-full"></div>
                    </div>

                    <!-- If has children, show grid -->
                    <div
                      v-if="activeSidebarItem.children"
                      class="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[calc(100%-80px)] overflow-y-auto pr-2"
                    >
                      <div
                        v-for="subChild in activeSidebarItem.children"
                        :key="subChild.link"
                        class="group"
                      >
                        <a
                          :href="subChild.link"
                          class="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                          <div
                            class="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          >
                            <ChevronLeftIcon class="w-5 h-5" />
                          </div>
                          <span class="font-medium text-gray-700 transition-colors">{{
                            subChild.title
                          }}</span>
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
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <!-- Mobile Menu -->
      <div class="sm:hidden container relative">
        <ul class="flex flex-wrap items-center gap-x-2 py-4 gap-y-4">
          <li v-for="item in menuItems" :key="item.link" class="relative">
            <a :href="item.link" class="text-gray-700 px-3 py-1 rounded-lg text-sm">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </header>
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
  methods: {
    openMobileMenu() {
      this.isMobileMenuOpen = true;
      // Auto-expand خودروها and دسته بندی قطعات
      this.openMobileItems = ["/vehicles", "/categories"];
    },
    handleMenuItemClick(event, link) {
      event.preventDefault();
      this.toggleMobileItem(link);
    },
    toggleMobileItem(link) {
      const index = this.openMobileItems.indexOf(link);
      if (index > -1) {
        this.openMobileItems.splice(index, 1);
      } else {
        this.openMobileItems.push(link);
      }
    },
  },
  data() {
    return {
      isMobileMenuOpen: false,
      openMobileItems: [],
      activeMenuItem: null,
      activeSidebarItem: null,
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
