<template>
  <div class="flex">
    <NuxtPage />
  </div>
</template>

<script setup>
import { useAppStore } from "../stores";

const appStore = useAppStore();
</script>

<style scoped>
.main-layout {
  min-height: 100dvh;
}
</style>
