import { Customer } from '../models/customer';
import * as list from '../actions/list';

export interface State {
  recentlyAdded: Customer[];
}

export const initialState: State = {
  recentlyAdded: [],
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


