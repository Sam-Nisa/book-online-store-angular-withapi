import {Routes} from '@angular/router';

export const ManagePrivacyRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./routes/terms.component').then(c => c.TermsComponent)
  }
]
