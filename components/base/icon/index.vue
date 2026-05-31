<template>
  <span class="base-icon">
    <span
      v-if="svgContent"
      v-html="svgContent"
      :style="{ '--icon-color': color, 'font-size': `${size}px` }"
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
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12H4m0 0l6-6m-6 6l6 6" />
    </svg>
  `,
  "arrow-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <g fill="none">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path fill="currentColor" d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414" />
      </g>
    </svg>
  `,
  dot: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
      <path d="M0 0h15v15H0z" fill="none" />
      <path fill="currentColor" d="M7.5 4.875a2.625 2.625 0 1 1 0 5.25a2.625 2.625 0 0 1 0-5.25m0 1a1.625 1.625 0 1 0 0 3.25a1.625 1.625 0 0 0 0-3.25" />
    </svg>
  `,
  dashboard: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1m0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1M13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1" />
    </svg>
  `,
  styles: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="m3.975 19.8l-.85-.35q-.775-.325-1.037-1.125t.087-1.575l1.8-3.9zm4 2.2q-.825 0-1.412-.587T5.975 20v-6l2.65 7.35q.075.175.15.338t.2.312zm5.15-.1q-.8.3-1.55-.075t-1.05-1.175l-4.45-12.2q-.3-.8.05-1.562t1.15-1.038l7.55-2.75q.8-.3 1.55.075t1.05 1.175l4.45 12.2q.3.8-.05 1.563t-1.15 1.037zM11.688 9.713q.287-.288.287-.713t-.287-.712T10.975 8t-.712.288T9.975 9t.288.713t.712.287t.713-.288" />
    </svg>
  `,
  cms: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
      <path d="M0 0h48v48H0z" fill="none" />
      <path fill="currentColor" fill-rule="evenodd" d="M1.546 27.5c.987-9.066 2.4-16.26 3.333-20.428c.68-3.039 3.257-5.215 6.379-5.35C13.905 1.608 17.996 1.5 24 1.5s10.095.108 12.742.222c3.122.135 5.698 2.311 6.378 5.35c.934 4.167 2.347 11.362 3.334 20.428H34.162a4.5 4.5 0 0 0-4.27 3.077l-.632 1.897a1.5 1.5 0 0 1-1.423 1.026h-7.675a1.5 1.5 0 0 1-1.423-1.026l-.632-1.897a4.5 4.5 0 0 0-4.27-3.077zM15 11a2 2 0 0 1 2-2h14a2 2 0 1 1 0 4H17a2 2 0 0 1-2-2m0 7a2 2 0 1 0 0 4h18a2 2 0 1 0 0-4z" clip-rule="evenodd" />
      <path fill="currentColor" d="M7.748 46.002c3.07.248 8.17.498 16.252.498s13.181-.25 16.252-.498c3.113-.252 5.515-2.618 5.79-5.737c.302-3.401.405-7.295.44-9.765h-12.32a1.5 1.5 0 0 0-1.423 1.026l-.632 1.897a4.5 4.5 0 0 1-4.27 3.077h-7.675a4.5 4.5 0 0 1-4.27-3.077l-.632-1.897a1.5 1.5 0 0 0-1.423-1.026H1.517c.036 2.47.139 6.364.44 9.765c.275 3.119 2.678 5.485 5.79 5.737" />
    </svg>
  `,
  close: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10M7 17L17 7" />
    </svg>
  `,
  menu: `
   <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1" />
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
