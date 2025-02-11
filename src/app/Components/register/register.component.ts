import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../interfaces/auth';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    CardModule,
    RouterModule,
    NgIf
  ]
})
export class RegisterComponent {
  registerForm;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {
    // Initialize the registerForm inside the constructor
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/), Validators.maxLength(35)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/), Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) // Password: at least 1 uppercase, 1 number, 1 special character, max length 8
      ]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: passwordMatchValidator
    });
  }

  get firstName() { return this.registerForm.controls['firstName']; }
  get lastName() { return this.registerForm.controls['lastName']; }
  get email() { return this.registerForm.controls['email']; }
  get password() { return this.registerForm.controls['password']; }
  get confirmPassword() { return this.registerForm.controls['confirmPassword']; }

  submitDetails() {
    if (this.registerForm.invalid) return;

    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword; // Remove confirmPassword before sending

    this.authService.registerUser(postData as User).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registered successfully' });
        this.router.navigate(['login']);
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    );
  }
}
