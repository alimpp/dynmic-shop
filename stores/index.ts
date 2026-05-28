import { AppStore } from "./modules/AppStore";

export const initializeStores = () => {
  AppStore.getInstance();
};

initializeStores();

export const useAppStore = () => AppStore.getInstance();
