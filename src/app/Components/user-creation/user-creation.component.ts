

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-creation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent {
  maxDate: string = new Date().toISOString().split('T')[0];
  userForm: FormGroup;

  // ✅ List of countries
  countries = [
    "United States", "Canada", "United Kingdom", "India", "China", "Russia", "Germany", 
    "France", "Australia", "Japan", "Brazil", "South Africa", "Mexico", "Spain", "Italy",
    "Netherlands", "Sweden", "Switzerland", "South Korea", "Singapore", "Argentina"
  ];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      last_name: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      mobile_phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address_line_1: ['', [Validators.required, Validators.maxLength(40)]],
      address_line_2: [''],
      city: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      state: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      zipcode: ['', [Validators.required, Validators.pattern(/^\d{6}$|^\d{9}$/)]],
      country: ['United States', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      allowNotifications: [false],
      notes: ['', [Validators.maxLength(200)]] // ✅ Notes field (optional, max 200 characters)
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted:', this.userForm.value);
    }
  }
}
