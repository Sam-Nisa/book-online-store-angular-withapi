// register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  agreeToTerms: boolean = false;

  features: string[] = [
    'register.features.access',
    'register.features.recommendations',
    'register.features.progress'
  ];

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit(): void {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    if (!this.agreeToTerms) {
      console.error('Please agree to terms and conditions');
      return;
    }
    console.log('Register form submitted', {
      fullName: this.fullName,
      email: this.email
      // Note: In a real app, don't log passwords
    });
  }
}
