import { Injectable } from '@angular/core';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Customer } from '../../models/customer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromCustomer from '../../reducers';

@Injectable()
export class CustomerRecentlyAddedDataSource implements DataSource<Customer> {
  customers$ = this.store.select(fromCustomer.getRecentlyAdded);

  constructor(private store: Store<fromCustomer.State>) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Customer[]> {
    return this.customers$;
    // return of(([{id: 12, firstName: 'jalal', lastName: 'hosseiny', createdAt: new Date(Date.now()), updatedAt: new Date(Date.now())}]));
    // return this.store.dispatch(new List.CustomerList({page: this.page}));
  }


  disconnect(collectionViewer: CollectionViewer): void {
  }

}

