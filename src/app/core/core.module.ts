import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashplayComponent } from './containers/cashplay/cashplay.component';
import { AppComponent } from './containers/app/app.component';
import { MdButtonModule, MdMenuModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { CustomerModule, customerRoutes } from '../customer/customer.module';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  {path: 'customer', children: customerRoutes},
];
const COMPONENTS = [AppComponent, CashplayComponent, NavComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    RouterModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,

    CustomerModule,
  ],
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
