<template>
  <div class="flex">
    <BaseIcon name="app" />
    <span class="f-s-15 f-w-500 color-primary px-5">{{ $t("Admin") }}</span>
    <span class="f-s-15 f-w-500 px-5 color-primary">/</span>
    <span class="f-s-15 f-w-500 px-5" v-for="(item, index) in source" :key="index">
      {{ $t(item) }} <span v-if="index + 1 < source.length"> / </span></span
    >
  </div>
</template>

<script setup>
const props = defineProps({
  source: { type: Array, default: [] },
});
</script>
