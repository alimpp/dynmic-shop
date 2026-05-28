<template>
  <span class="base-icon">
    <span
      v-if="svgContent"
      v-html="svgContent"
      :style="{ '--icon-color': color, '--icon-size': `${size}px` }"
    ></span>
    <span v-else class="icon-error">Icon not found: {{ name }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

const iconsMap: Record<string, string> = {
  "arrow-up": `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  "arrow-down": `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  "arrow-left": `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5L7 10L12 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  "arrow-right": `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 19L17 14L12 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
};

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 24,
  },
  color: {
    type: String,
    default: "currentColor",
  },
});

const svgContent = computed<string | null>(() => {
  const iconSVG = iconsMap[props.name];
  if (!iconSVG) {
    console.warn(`Icon "${props.name}" not found.`);
    return null;
  }
  return iconSVG;
});
</script>

<style scoped>
.base-icon {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  line-height: 0;
  color: var(--icon-color, currentColor);
  width: var(--icon-size, 24px);
  height: var(--icon-size, 24px);
  overflow: hidden;
}

.base-icon span[v-html] {
  display: block;
  width: 100%;
  height: 100%;
}

/* استایل برای زمانی که آیکون پیدا نمی‌شود */
.icon-error {
  color: red;
  font-size: 0.8em;
  display: inline-block; /* اطمینان از نمایش */
}
</style>
