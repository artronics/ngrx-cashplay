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
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/effects/auth.effects';

export function authLoadChildren() {
  return AuthModule;
}
export const routes: Routes = [
  {path: 'auth', loadChildren: authLoadChildren},
  {path: 'app', component: CashplayComponent, canActivate: [AuthGuard]},
];
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(routes),

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    CoreModule.forRoot(),
    AuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
