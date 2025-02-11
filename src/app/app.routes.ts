import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
