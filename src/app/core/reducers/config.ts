import * as Core from '../actions/core';

export interface State {
  baseUrl: string;
  pageSizeOptions: number[];
  defaultResourcesPerPage: number;
  recentlyAddedCustomersPerPage: number;
  searchResultsPerPage: number;
}

export const initialState = {
  baseUrl: 'http://localhost:8080/api',
  pageSizeOptions: [1, 2, 3, 5, 10],
  defaultResourcesPerPage: 10,
  recentlyAddedCustomersPerPage: 3,
  searchResultsPerPage: 2,
};

export const reducer = function (state = initialState, action: Core.Actions) {
  switch (action.type) {
    case Core.CORE_CONFIG_SET:
      const s = {...state};
      s[action.payload.key] = action.payload.value;
      return s;
    default:
      return state;
  }
};

