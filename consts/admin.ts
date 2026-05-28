import { ref } from "vue";

export const routes = ref([
  {
    id: 0,
    name: "Dashboard",
    open: false,
    childs: [
      {
        id: 1,
        name: "Customers",
        path: "/admin/dashboard/cutomers",
      },
    ],
  },
  {
    id: 1,
    name: "Styles",
    open: false,
    childs: [
      {
        id: 1,
        name: "Main Background",
        path: "/admin/styles/main-background",
      },
      {
        id: 2,
        name: "Typography",
        path: "/admin/styles/typography",
      },
    ],
  },
  {
    id: 2,
    name: "Cms",
    open: false,
    childs: [
      {
        id: 1,
        name: "Hero",
        path: "/admin/cms/hero",
      },
      {
        id: 2,
        name: "Banners",
        path: "/admin/cms/banners",
      },
      {
        id: 3,
        name: "Services",
        path: "/admin/cms/services",
      },
    ],
  },
]);
