import { Component } from '@angular/core';
import { UserCreationComponent } from './Components/user-creation/user-creation.component'; // Use correct relative path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCreationComponent], // Importing UserCreationComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EHR-DEMO';
}
