import {Routes} from '@angular/router';

export const ManageFaqRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./routes/faq.component').then(c => c.FaqComponent)
  }
]
