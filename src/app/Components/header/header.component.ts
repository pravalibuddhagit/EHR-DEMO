import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // ✅ Keep NgIf only

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [NgIf] // ✅ Remove NgClass
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
