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
  enIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="none" />
      <mask id="SVGuywqVbel">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#SVGuywqVbel)">
        <path fill="#eee" d="m0 0l8 22l-8 23v23l32 54l-32 54v32l32 48l-32 48v32l32 54l-32 54v68l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0l-22 8l-23-8h-23l-54 32l-54-32h-32l-48 32l-48-32h-32l-54 32L68 0z" />
        <path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z" />
        <path fill="#d80027" d="M0 0v45l131 131h45zm208 0v208H0v96h208v208h96V304h208v-96H304V0zm259 0L336 131v45L512 0zM176 336L0 512h45l131-131zm160 0l176 176v-45L381 336z" />
      </g>
    </svg>
  `,
  faIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
      <path d="M0 0h512v512H0z" fill="none" />
      <mask id="SVGuywqVbel">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#SVGuywqVbel)">
        <path fill="#eee" d="M0 144.7L258.8 39.6L512 144.7v222.6L257 493L0 367.3z" />
        <path fill="#6da544" d="M0 0v144.7h105.6v-22.2h33.6v22.2h33.3v-22.2h33.6v22.2h33.3v-22.2H273v22.2h33v-22.2h33.6v22.2h33.2v-22.2h33.6v22.2H512V0z" />
        <path fill="#d80027" d="M0 367.3V512h512V367.3H406.4v22.4h-33.6v-22.4h-33.2v22.4H306v-22.4h-33v22.4h-33.6v-22.4h-33.3v22.4h-33.6v-22.4h-33.3v22.4h-33.6v-22.4zm339.1-178h-33.4c.2 3.7.4 7.4.4 11.1c0 24.8-6.2 48.8-17 66c-3.3 5.2-9 12.6-16.4 17.6v-94.7h-33.4v94.8c-7.5-5-13-12.4-16.4-17.7c-10.8-17-17-41-17-65.9c0-3.7.2-7.4.4-11H173a190 190 0 0 0-.4 11c0 68.7 36.7 122.5 83.5 122.5s83.5-53.8 83.5-122.5c0-3.7-.1-7.4-.4-11z" />
      </g>
    </svg>
  `,
  pallete: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
      <path d="M0 0h32v32H0z" fill="none" />
      <path fill="currentColor" d="M15.653 7.25c-3.417 0-8.577.983-8.577 3.282c0 1.91 2.704 3.23 1.69 3.89c-1.02.665-2.683-1.85-4.047-1.85c-1.654 0-2.816 1.435-2.816 2.927c0 4.557 6.326 8.25 13.75 8.25c7.423 0 13.442-3.693 13.442-8.25c0-4.556-6.02-8.25-13.443-8.25zm-5.345 6.27c0-.644.887-1.165 1.98-1.165s1.98.52 1.98 1.166s-.887 1.167-1.98 1.167s-1.98-.523-1.98-1.166zm3.98 8.78c-1.057 0-1.913-.68-1.913-1.52s.856-1.517 1.914-1.517c1.056 0 1.913.68 1.913 1.518s-.857 1.52-1.914 1.52zm5.323-.53c-1.056 0-1.912-.68-1.912-1.518c0-.84.856-1.52 1.913-1.52c1.06 0 1.915.68 1.915 1.52s-.855 1.52-1.914 1.52zm.465-11.11c0-.838.856-1.518 1.914-1.518s1.912.68 1.912 1.518c0 .84-.855 1.518-1.913 1.518c-1.056 0-1.915-.68-1.915-1.518zm4.2 8.822c-1.057 0-1.914-.68-1.914-1.52s.858-1.517 1.915-1.517c1.06 0 1.914.68 1.914 1.518s-.856 1.52-1.915 1.52zm1.01-4.007c-1.057 0-1.913-.68-1.913-1.52c0-.837.856-1.517 1.914-1.517s1.913.68 1.913 1.518c0 .84-.857 1.52-1.914 1.52z" />
    </svg>
  `,
  app: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="M12.5 6.5a5 5 0 1 1 10 0a5 5 0 0 1-10 0M2 2h9v9H2zm0 11h9v9H2zm11 0h9v9h-9z" />
    </svg>
  `,
  checkFill: `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z" clip-rule="evenodd" />
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
