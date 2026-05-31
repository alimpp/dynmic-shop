import { defineNuxtPlugin } from "nuxt/app";
import { createI18n } from "vue-i18n";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: {
      fa: {
        Dashboard: "داشبورد",
        Customers: "مشتریان",
        Styles: "استایل",
        "Main Background": "تصویر زمینه اصلی",
        Typography: "تایپوگرافی",
        CMS: "مدیریت صفحه اصلی",
        Hero: "هیرو",
        Banners: "بنرها",
        Services: "سرویس ها",
      },
      en: {
        Dashboard: "Dashboard",
        Customers: "Customers",
        Styles: "Styles",
        "Main Background": "Main Background",
        Typography: "Typography",
        CMS: "CMS",
        Hero: "Hero",
        Banners: "Banners",
        Services: "Services",
      },
    },
  });

  nuxtApp.vueApp.use(i18n);
});
