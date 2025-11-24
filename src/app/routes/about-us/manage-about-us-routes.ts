import {Router, Routes} from '@angular/router';
export const manageAboutUsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./routes/about-us.component').then(c => c.AboutUsComponent)

  }
]
