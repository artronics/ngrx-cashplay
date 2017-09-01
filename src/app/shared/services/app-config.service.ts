import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {

  private config: Object = null;
  private env: Object = null;

  constructor() {
  }

  public getConfig(key: string) {
    return this.config[key];
  }

  public getEnv(key: any) {
    return this.env[key];
  }

  public load() {

  }
}
