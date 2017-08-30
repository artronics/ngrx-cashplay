import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashplayComponent } from './containers/cashplay/cashplay.component';
import { AppComponent } from './containers/app/app.component';
import { MdButtonModule, MdMenuModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [

];
const COMPONENTS = [AppComponent, CashplayComponent];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
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
