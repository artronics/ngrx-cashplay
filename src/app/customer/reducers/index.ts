import * as fromList from './list';
import * as fromRoot from '../../app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CustomerState {
  list: fromList.State;
}

export interface State extends fromRoot.State {
  customer: CustomerState;
}

export const reducers = {
  list: fromList.reducer,
};

export const selectCustomerState = createFeatureSelector<CustomerState>('customer');

export const selectListState = createSelector(
  selectCustomerState,
  (state: CustomerState) => state.list);

export const getRecentlyAdded = createSelector(
  selectListState,
  fromList.getRecentlyAdded,
);
