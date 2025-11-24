import { Component } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import {RouterLink} from '@angular/router';

const SOCIALS: { icon: string; url: string }[] = [
  {
    icon: '/icons/footer/facebook.svg',
    url: 'https://www.facebook.com/profile.php?id=61577022316274'
  },
  {
    icon: '/icons/footer/telegram.svg',
    url: 'https://www.facebook.com/profile.php?id=61577022316274'
  },
  {
    icon: '/icons/footer/instagram.svg',  // ✅ Instagram added
    url: 'https://www.facebook.com/profile.php?id=61577022316274'
  }
];

@Component({
  selector: 'app-footer',
  imports: [
    NgOptimizedImage,
    NgForOf,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'] // ✅ fix here
})
export class FooterComponent {
  socials: { icon: string; url: string }[] = [];
  phoneNumber: string;
  year: number = new Date().getFullYear();

  constructor() {
    this.socials = SOCIALS;
    this.phoneNumber = '+855 123 456 789';
  }
}
