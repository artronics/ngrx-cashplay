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
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './effects/list.effects';
import { CustomerRecentlyAddedComponent } from './containers/customer-recently-added/customer-recently-added.component';
import { CustomerRecentlyAddedDataSource } from './containers/customer-recently-added/customer-recently-added-data-source';

const COMPONENTS = [
  CustomerPageComponent,
  CustomerRecentlyAddedComponent,
  CustomerSearchComponent,
  CustomerListComponent,
];

export const customerRoutes: Routes = [
  {path: '', component: CustomerPageComponent}
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,

    StoreModule.forFeature('customer', reducers),
    EffectsModule.forFeature([ListEffects]),
  ],
  providers: [CustomerRecentlyAddedDataSource]
})
export class CustomerModule {
}
