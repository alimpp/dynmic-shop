import { ref } from "vue";

export const routes = ref([
  {
    id: 0,
    icon: "dashboard",
    name: "Dashboard",
    path: "dashboard",
    open: false,
    childs: [
      {
        id: 1,
        name: "Customers",
        path: "/admin/dashboard/cutomers",
        route: "cutomers",
      },
    ],
  },
  {
    id: 1,
    icon: "styles",
    name: "Styles",
    path: "styles",
    open: false,
    childs: [
      {
        id: 1,
        name: "Main Background",
        path: "/admin/styles/main-background",
        route: "main-background",
      },
      {
        id: 2,
        name: "Typography",
        path: "/admin/styles/typography",
        route: "typography",
      },
    ],
  },
  {
    id: 2,
    icon: "cms",
    name: "CMS",
    path: "cms",
    open: false,
    childs: [
      {
        id: 1,
        name: "Hero",
        path: "/admin/cms/hero",
        route: "hero",
      },
      {
        id: 2,
        name: "Banners",
        path: "/admin/cms/banners",
        route: "banners",
      },
      {
        id: 3,
        name: "Services",
        path: "/admin/cms/services",
        route: "services",
      },
    ],
  },
]);
