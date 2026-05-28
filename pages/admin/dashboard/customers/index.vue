<template>
  <div class="flex">
    {{ t("hello") }}
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

definePageMeta({
  layout: "admin",
});
</script>
