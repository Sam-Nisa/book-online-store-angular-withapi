import {Routes} from '@angular/router';

export const manageDetailRoute: Routes = [
  {
    path: ':id',
    loadComponent: () => import('./routes/manage-detail.component').then(c => c.ManageDetailComponent)
  }
]
