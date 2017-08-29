import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/containers/login-page/login-page.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { CashplayComponent } from './core/containers/cashplay/cashplay.component';
import { AuthGuard } from './auth/services/auth-guard.service';
import { AppComponent } from './core/containers/app/app.component';

const routes: Routes = [
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'app', component: CashplayComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(routes),

    CoreModule.forRoot(),
    AuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
