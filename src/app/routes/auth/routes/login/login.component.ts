// login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // FIXED: must be styleUrls, not styleUrl
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  rememberMe: boolean = false;

  // Add features if you are using *ngFor in HTML
  features: string[] = [
    'Your personalized library',
    'Continue where you left off',
    'Sync across all devices'
  ];

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    console.log('Login submitted', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    });
    // Add your login logic here
  }
}

