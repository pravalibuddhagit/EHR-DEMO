import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { UserCreationComponent } from './app/Components/user-creation/user-creation.component';
import { WelcomeComponent } from './app/Components/welcome/welcome.component';  
//port { LoginComponent } from './app/Components/login/login.component';
import { RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: WelcomeComponent },  // Default Route (Welcome Page)
  { path: 'user-creation', component: UserCreationComponent },
  //path: 'login', component: LoginComponent }
   // User Creation Route
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
