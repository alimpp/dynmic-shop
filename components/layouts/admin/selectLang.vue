<template>
  <div class="flex">
    <BaseIcon
      @click="changeLocale()"
      name="faIcon"
      class="cursor-pointer"
      v-if="locale === 'en'"
    />
    <BaseIcon
      @click="changeLocale()"
      name="enIcon"
      class="cursor-pointer"
      v-else
    />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const changeLocale = (lang) => {
  if (locale.value === "fa") locale.value = "en";
  else locale.value = "fa";
};
</script>
