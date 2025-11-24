import {Router, Routes} from '@angular/router';
export const manageCareersRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./routes/careers.component').then(c => c.CareersComponent)
  }
]
