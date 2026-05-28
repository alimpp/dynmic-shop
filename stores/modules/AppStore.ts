import { BaseStore } from "../../core/BaseStore";
import { StoreManager } from "../../core/StoreManager";
interface IApplication {
  theme: string;
}

export class AppStore extends BaseStore<IApplication> {
  private static _instance: AppStore;

  public static getInstance(): AppStore {
    if (!AppStore._instance) {
      AppStore._instance = new AppStore();
    }
    return AppStore._instance;
  }

  private constructor() {
    super("application", {
      theme: "primary",
    });
    StoreManager.register(this);
  }

  public get getTheme(): string {
    return this._state.theme;
  }

  public setTheme(theme: string): void {
    this._state.theme = theme;
  }

  public reset() {
    this._state.theme = "light";
  }
}
