import { defineNuxtPlugin } from "nuxt/app";
import { createI18n } from "vue-i18n";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: {
      fa: {
        hello: "سلام",
      },
      en: {
        hello: "hi hello",
      },
    },
  });

  nuxtApp.vueApp.use(i18n);
});
