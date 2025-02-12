


import { Component } from '@angular/core';
import { HeaderComponent } from './Components/header/header.component'; // Adjust the path
//import { RouterOutlet } from '@angular/router';
//import { LoginComponent } from './Components/login/login.component';
//import { WelcomeComponent } from './welcome.component';
//import { WelcomeComponent } from "./Components/welcome/welcome.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterModule], 
  template: `
   <app-header></app-header>
   <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

