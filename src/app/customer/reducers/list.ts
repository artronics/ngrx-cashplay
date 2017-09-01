import { Customer } from '../models/customer';
import * as list from '../actions/list';
import { Page } from '../../shared/models/page';

export interface State {
  recentlyAdded: Customer[];
  pageSizeOptions: number[];
  page: Page;
}

export const initialState: State = {
  recentlyAdded: [],
  pageSizeOptions: [1, 2, 3, 5, 10],
  page: {pageIndex: 0, pageSize: 3},
};

export function reducer(state = initialState, action: list.Actions) {
  switch (action.type) {
    case list.CUSTOMER_LIST_SUCCESS:
      return {
        ...state,
        recentlyAdded: action.payload.customers,
      };
    default:
      return state;
  }
}

export const getRecentlyAdded = (state: State) => state.recentlyAdded;
export const getPageSizeOptions = (state: State) => state.pageSizeOptions;
export const getPage = (state: State) => state.page;


