import { Action } from '@ngrx/store';

export const CORE_CONFIG_SET = 'Core Config Set';

export class CoreConfigSet implements Action {
  readonly type = CORE_CONFIG_SET;

  constructor(public payload: { key: string, value: any }) {
  }
}

export type Actions =
  | CoreConfigSet;

