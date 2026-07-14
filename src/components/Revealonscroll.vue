<template>
  <div ref="wrapperRef">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  y: {
    type: Number,
    default: 40,
  },
  duration: {
    type: Number,
    default: 0.7,
  },
  delay: {
    type: Number,
    default: 0,
  },
  start: {
    type: String,
    default: "top 88%",
  },
  stagger: {
    type: [Boolean, Number],
    default: false,
  },
});

const wrapperRef = ref(null);
let triggerInstances = [];

onMounted(() => {
  if (!wrapperRef.value) return;

  // اگه stagger فعال باشه، هر فرزند مستقیم جدا انیمیشن می‌گیره
  if (props.stagger) {
    const children = Array.from(wrapperRef.value.children);
    if (!children.length) return;

    const staggerAmount = typeof props.stagger === "number" ? props.stagger : 0.12;

    children.forEach((child, index) => {
      const tween = gsap.from(child, {
        opacity: 0,
        y: props.y,
        duration: props.duration,
        delay: props.delay + index * staggerAmount,
        ease: "power2.out",
        scrollTrigger: {
          trigger: child,
          start: props.start,
        },
      });
      if (tween.scrollTrigger) triggerInstances.push(tween.scrollTrigger);
    });
  } else {
    // بدون stagger، کل محتوای داخل slot با هم انیمیشن می‌گیرن
    const tween = gsap.from(wrapperRef.value, {
      opacity: 0,
      y: props.y,
      duration: props.duration,
      delay: props.delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrapperRef.value,
        start: props.start,
      },
    });
    if (tween.scrollTrigger) triggerInstances.push(tween.scrollTrigger);
  }
});

onBeforeUnmount(() => {
  triggerInstances.forEach((st) => st.kill());
  triggerInstances = [];
});
</script>
