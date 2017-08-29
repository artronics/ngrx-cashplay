import { NgModule } from '@angular/core';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { RegisterPageComponent } from './containers/register-page/register-page.component';

const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch: 'prefix'},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
];

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [
    AuthGuard,
  ]
})
export class AuthModule {}
