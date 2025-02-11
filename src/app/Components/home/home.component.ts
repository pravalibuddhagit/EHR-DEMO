import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    ButtonModule, // PrimeNG button module
    RouterModule   // RouterModule for navigation
  ]
})
export class HomeComponent {

  constructor(private router: Router) {}

  logOut() {
    sessionStorage.clear(); // Clear session storage
    this.router.navigate(['login']); // Navigate to login page
  }
}
