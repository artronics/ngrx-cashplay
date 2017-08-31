import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes } from '@angular/router';
import { CustomerPageComponent } from './containers/customer-page/customer-page.component';

const COMPONENTS = [CustomerPageComponent];

export const customerRoutes: Routes = [
  {path: '', component: CustomerPageComponent}
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    SharedModule,
  ],

})
export class CustomerModule {
}
