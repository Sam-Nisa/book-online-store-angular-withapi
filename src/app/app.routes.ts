import {Routes} from '@angular/router';
import {RootContainerComponent} from './components/root-container/root-container.component';

export const routes: Routes = [
  {
    path: '',
    component: RootContainerComponent, // This has header/footer
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home',
        loadChildren: () => import('./routes/home/manage-home-routes').then(m => m.manageHomeRoutes)
      },
      {
        path: 'about-us',
        loadChildren: () => import('./routes/about-us/manage-about-us-routes').then(m => m.manageAboutUsRoutes)
      },
      {
        path: 'contact-us',
        loadComponent: () => import('./routes/contact-us/routes/contact-us.component').then(c => c.ContactUsComponent)
      },
      {
        path: 'careers',
        loadComponent: () => import('./routes/careers/routes/careers.component').then(c => c.CareersComponent)
      },
      {
        path: 'faq',
        loadComponent: () => import('./routes/faq/routes/faq.component').then(c => c.FaqComponent)
      },
      {
        path: 'privacy-policy',
        loadComponent: () => import('./routes/privacy-policy/routes/privacy-policy.component').then(c => c.PrivacyPolicyComponent)
      },
      {
        path: 'term',
        loadComponent: () => import('./routes/terms/routes/terms.component').then(c => c.TermsComponent)
      },
      {
        path: 'bestseller',
        loadChildren: () => import('./routes/bestseller/manage-best-seller-routes').then(m => m.manageBestSellerRoutes)
      },
      {
        path: 'books',
        loadChildren: () => import('./routes/manage-detail/manage-detail-route').then(m => m.manageDetailRoute)
      },
      {
        path: 'category',
        loadChildren: () => import('./routes/categoried-book/manage-categoried-book-routes').then(m => m.manageCategoriedBookRoutes)
      }
    ]
  },
  // Auth routes WITHOUT RootContainerComponent (no header/footer)
  {
    path: 'auth',
    loadChildren: () => import('./routes/auth/manage-auth-route').then(m => m.authRoutes)
  }
];
