import { Component } from '@angular/core';
import { NgForOf, NgOptimizedImage, CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const SOCIALS: { icon: string; url: string }[] = [
  {
    icon: '/icons/footer/facebook.svg',
    url: 'https://www.facebook.com/'
  },
  {
    icon: '/icons/footer/telegram.svg',
    url: 'https://www.telegram.org/'
  },
  {
    icon: '/icons/footer/instagram.svg',
    url: 'https://www.instagram.com/'
  }
];

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    NgForOf,
    RouterLink,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socials: { icon: string; url: string }[] = [];
  phoneNumber: string;
  year: number = new Date().getFullYear();

  constructor() {
    this.socials = SOCIALS;
    this.phoneNumber = '+855 123 456 789';
  }

  getSocialPlatform(iconPath: string): string {
    const platform = iconPath?.split('/')?.pop()?.split('.')[0];
    return platform || 'social';
  }
}
