import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as List from '../actions/list';
import { CustomerListFailure, CustomerListSuccess } from '../actions/list';
import { ResourceService } from '../../shared/services/resource.service';
import { Customer } from '../models/customer';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ListEffects {
  constructor(private actions$: Actions, private resourceService: ResourceService<Customer>) {
    resourceService.resourceUrl = '/customers';
  }

  @Effect()
  customerList$ = this.actions$
    .ofType(List.CUSTOMER_LIST)
    .map((action: List.CustomerList) => action.payload)
    .exhaustMap(payload => this.resourceService.recentlyAdded(payload.page)
      .map(paginatedCustomers => paginatedCustomers._embedded
        ? new CustomerListSuccess({customers: paginatedCustomers._embedded['customers']})
        : new CustomerListSuccess({customers: []}))
      .catch(error => of(new CustomerListFailure(error)))
    );

}
