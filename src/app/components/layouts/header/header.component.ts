import {Component, HostListener, Inject, Injector, PLATFORM_ID, signal} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {categories} from '../../../constants/categories';
import {MenuItemModel} from '../../../types/menu-item';
import {LanguageEnum} from '../../../types/enums/language.enum';
import {AuthService} from '../../../services/auth.service';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';


const MENUS: MenuItemModel[] = [
  {
    title: 'navbar.browse-categories',
    route: 'category'
  },
  {
    title: 'navbar.best-sellers',
    route: 'bestseller'
  },
  {
    title: 'navbar.about-us',
    route: 'about-us'
  }
]

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    MatIcon,
    MatMenuTrigger,
    MatMenu
  ]
})
class HeaderComponent {

  isDropdownOpen = false;
  isMobileMenuOpen = false;
  isMobileDropdownOpen = false;
  categories = categories;
  menus = MENUS; // Add the MENUS array to the component

  // Search properties
  searchQuery = '';
  mobileSearchQuery = '';
  ipadSearchQuery = '';

  private isBrowser: boolean;
  avatar = '';
  returnUrl: string = '';
  prevScroll: number = 0;
  isScrolled?: boolean;
  activeMenuRoute = '';
  user = signal<any>(null);
  currentLang = signal<string>(LanguageEnum.EN);

  constructor(injector: Injector,
              private authService: AuthService,
              private router: Router,
              protected translateService: TranslateService,
              @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // super(injector);
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Get saved language or use browser language or default to English
    let savedLang = this.isBrowser ? localStorage.getItem('userLanguage') : null;
    const browserLang = this.translateService.getBrowserLang();
    const defaultLang = savedLang || (browserLang && ['en', 'km'].includes(browserLang) ? browserLang : 'en');

    this.translateService.use(defaultLang);
    this.currentLang.set(defaultLang);

    this.translateService.onLangChange.subscribe(event => {
      this.currentLang.set(event.lang);
    });
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
        queryParams: {q: this.searchQuery.trim()}
      });
      this.searchQuery = '';
    }
  }

  // Search function for mobile
  onMobileSearch() {
    if (this.mobileSearchQuery.trim()) {
      this.router.navigate(['/search'], {
        queryParams: {q: this.mobileSearchQuery.trim()}
      });
      this.mobileSearchQuery = '';
      this.toggleMobileMenu();
    }
  }

  // Search function for iPad
  onIpadSearch() {
    if (this.ipadSearchQuery.trim()) {
      this.router.navigate(['/search'], {
        queryParams: {q: this.ipadSearchQuery.trim()}
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

  switchLanguage(lang: string) {
    this.translateService.use(lang);
    this.currentLang.set(lang);
    // Save the language preference
    if (this.isBrowser) {
      localStorage.setItem('userLanguage', lang);
    }
  }

}

export default HeaderComponent
