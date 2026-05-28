import { AppDataModel } from "../model/App";

export class AppController extends AppDataModel {
  constructor() {
    super();
  }
}

export const appController = new AppController();
