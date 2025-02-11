import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button, ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { SkeletonModule } from 'primeng/skeleton';


@Component({
  selector: 'app-login',
  imports:[ButtonModule,CommonModule,FormsModule,ReactiveFormsModule,ButtonModule,CheckboxModule,
    MessageModule,
    SkeletonModule,
    PasswordModule,InputTextModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  step: number = 1;
  loading: boolean = false;
  user: { firstName: string; lastName: string; email: string; password: string } | null = null;
  rememberMe: boolean = false;
  error: string = '';

  dummyUsers = [
    { email: 'test@example.com', firstName: 'John', lastName: 'Doe', password: 'P@ss123' },
    { email: 'user@domain.com', firstName: 'Jane', lastName: 'Smith', password: 'P@ss1234' },
  ];

  ngOnInit(): void {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      this.email = rememberedEmail;
      this.rememberMe = true;
    }
  }
  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    
    return emailRegex.test(email);
  }

  private showError(message: string) {
    this.error = message;
  
    setTimeout(() => {
      this.error = '';
    },2000);
  }
  
  
  onSubmitEmail() {
    if (!this.validateEmail(this.email)) {
      this.error = 'Please enter a valid email.';
      return;
    }

    this.error = '';
    this.loading = true;

    setTimeout(() => {
      const user = this.dummyUsers.find((u) => u.email === this.email);
      this.loading = false;

      if (user) {
        this.user = user;
        this.step = 2;

        if (this.rememberMe) {
          localStorage.setItem('rememberedEmail', this.email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }
      } else {
        this.showError('No account found with this email.');
      }
    },1000);
  }

  onSubmitPassword() {
    console.log('herere');
    console.log(this.password);
    
    if (!this.password || !this.password.trim()) {
      this.showError('Please enter your password');
      return;
    }
    if (
      this.password.length <= 8 &&
      /[A-Z]/.test(this.password) &&
      /[0-9]/.test(this.password) &&
      /\W/.test(this.password)
    )
     { 
       if (this.user && this.user.password !== this.password) {
            this.showError('Paaword doesn"t match');
            return;
        }
        else {
          alert(`Welcome, ${this.user?.firstName}!`);
         this.error = '';
     } }
     else{
      this.showError('Invalid password. Please try again');
     }
      
  }

  goBackToEmail() {
    this.step = 1;
    this.user = null;
    this.error = '';
    this.password = '';
  }

  navigateToRegister() {
    alert('Redirecting to registration page!');
  }
}
