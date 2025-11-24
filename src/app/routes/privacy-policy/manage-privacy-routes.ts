import {Routes} from '@angular/router';

export const ManagePrivacyRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./routes/privacy-policy.component').then(c => c.PrivacyPolicyComponent)
  }
]
