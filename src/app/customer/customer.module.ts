import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes } from '@angular/router';
import { CustomerPageComponent } from './containers/customer-page/customer-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { CustomerSearchComponent } from './components/customer-search/customer-search.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';

const COMPONENTS = [
  CustomerPageComponent,
  CustomerSearchComponent,
  CustomerListComponent,
];

export const customerRoutes: Routes = [
  {path: '', component: CustomerPageComponent}
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,

    StoreModule.forFeature('customer', reducers),
  ],

})
export class CustomerModule {
}
