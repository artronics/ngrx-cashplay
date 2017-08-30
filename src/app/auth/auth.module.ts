import { NgModule } from '@angular/core';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { RegisterPageComponent } from './containers/register-page/register-page.component';
import { EffectsModule } from '@ngrx/effects';
import { Authenticate } from './models/authenticate';
import { AuthEffects } from './effects/auth.effects';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch: 'prefix'},
  {path: '', children: [
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
  ]},
];

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthGuard,
    AuthService,
  ]
})
export class AuthModule {}
