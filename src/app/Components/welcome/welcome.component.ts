import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule, HeaderComponent,RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  goToUserCreation() {
    this.router.navigate(['/login']);

  }
}
