import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

export const routes: Routes = [
{
    path:'login',
    component:LoginComponent
},
{ path: '**', component:WelcomeComponent } 

];
