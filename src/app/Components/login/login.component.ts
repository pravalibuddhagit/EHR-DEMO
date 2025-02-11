import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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
export class LoginComponent {
  loginForm;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgService: MessageService
  ) {
    // Initialize the loginForm here
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() { return this.loginForm.controls['email']; }
  get password() { return this.loginForm.controls['password']; }

  loginUser() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    this.authService.getUserByEmail(email as string).subscribe(
      response => {
        if (response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('email', email as string);
          this.router.navigate(['/home']);
        } else {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Email or password is incorrect' });
        }
      },
      () => {
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    );
  }
}
