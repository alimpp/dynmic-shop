import { defineNuxtPlugin } from "nuxt/app";
import { createI18n } from "vue-i18n";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: {
      fa: {
        Admin: "ادمین",
        Dashboard: "داشبورد",
        Customers: "مشتریان",
        Styles: "استایل",
        "Main Background": "تصویر زمینه اصلی",
        Typography: "تایپوگرافی",
        CMS: "مدیریت صفحه اصلی",
        Hero: "هیرو",
        Banners: "بنرها",
        Services: "سرویس ها",
        "Select Color": "رنگ را انتخاب کنید",
        "Please Select Color Main Background Application":
          "لطفا رنگ اصلی مورد نظر را برای برنامه انتخاب کنید",
      },
      en: {
        Admin: "Admin",
        Dashboard: "Dashboard",
        Customers: "Customers",
        Styles: "Styles",
        "Main Background": "Main Background",
        Typography: "Typography",
        CMS: "CMS",
        Hero: "Hero",
        Banners: "Banners",
        Services: "Services",
        "Select Color": "Selected Color",
        "Please Select Color Main Background Application":
          "Please Select Color For Main Background Application",
      },
    },
  });

  nuxtApp.vueApp.use(i18n);
});
