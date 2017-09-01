import { Action } from '@ngrx/store';
import { Customer } from '../models/customer';
import { Page } from '../../shared/models/page';

export const CUSTOMER_LIST = '[Customer] list';
export const CUSTOMER_LIST_SUCCESS = '[Customer] list success';
export const CUSTOMER_LIST_FAILURE = '[Customer] list failure';


export class CustomerList implements Action {
  readonly type = CUSTOMER_LIST;

  constructor(public payload: { page: Page }) {
  }
}

export class CustomerListSuccess implements Action {
  readonly type = CUSTOMER_LIST_SUCCESS;

  constructor(public payload: { customers: Customer[] }) {
  }
}

export class CustomerListFailure implements Action {
  readonly type = CUSTOMER_LIST_FAILURE;

  constructor(public payload: any) {
  }
}

export type Actions =
  | CustomerList
  | CustomerListSuccess
  | CustomerListFailure;
