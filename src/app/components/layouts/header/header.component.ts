import {Component, HostListener} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {categories} from '../../../constants/categories';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule
  ]
})
export class HeaderComponent {
  isDropdownOpen = false;
  isMobileMenuOpen = false;
  isMobileDropdownOpen = false;
  categories = categories;

  // Search properties
  searchQuery = '';
  mobileSearchQuery = '';
  ipadSearchQuery = '';

  constructor(private router: Router) {
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.isMobileDropdownOpen = false;
    }
  }

  toggleMobileDropdown() {
    this.isMobileDropdownOpen = !this.isMobileDropdownOpen;
  }

  goToCategory(categoryId: number) {
    this.router.navigate(['/category', categoryId]);
    this.closeDropdown();
    this.isMobileMenuOpen = false;
  }

  // Search function for desktop
  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { q: this.searchQuery.trim() }
      });
      this.searchQuery = '';
    }
  }

  // Search function for mobile
  onMobileSearch() {
    if (this.mobileSearchQuery.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { q: this.mobileSearchQuery.trim() }
      });
      this.mobileSearchQuery = '';
      this.toggleMobileMenu();
    }
  }

  // Search function for iPad
  onIpadSearch() {
    if (this.ipadSearchQuery.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { q: this.ipadSearchQuery.trim() }
      });
      this.ipadSearchQuery = '';
    }
  }

  // Handle Enter key press for desktop search
  onSearchKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }

  // Handle Enter key press for mobile search
  onMobileSearchKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onMobileSearch();
    }
  }

  // Handle Enter key press for iPad search
  onIpadSearchKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onIpadSearch();
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdown = target.closest('.dropdown');

    if (!dropdown && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }


  isDarkMode = false;

  ngOnInit() {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

}
