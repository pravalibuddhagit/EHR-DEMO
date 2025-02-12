import { Routes } from '@angular/router';
import { UserCreationComponent } from './Components/user-creation/user-creation.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';  


 export const routes: Routes = [
  //{ path: '', component: WelcomeComponent }, // Default route
  { path: 'user-creation', component: UserCreationComponent },
  { path: '**', redirectTo: '/' } // Redirect unknown paths
];
