import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component'; // ✅ Correct path
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, HeaderComponent,RouterModule], // ✅ Import standalone HeaderComponent
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
 constructor(private router: Router) {}

  goToUserCreation() {
    this.router.navigate(['/user-creation']);

  }
}
