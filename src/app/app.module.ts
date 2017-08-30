import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { CashplayComponent } from './core/containers/cashplay/cashplay.component';
import { AuthGuard } from './auth/services/auth-guard.service';
import { AppComponent } from './core/containers/app/app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/effects/auth.effects';
import { ApiService } from './shared/services/api.service';
import { HttpModule } from '@angular/http';
import { APP_CONFIG, CASHPLAY_CONFIG } from './shared/models/app-config';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    HttpModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(routes),

    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthEffects]),

    CoreModule.forRoot(),
    AuthModule,

  ],
  providers: [
    {provide: APP_CONFIG, useValue: CASHPLAY_CONFIG},
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
