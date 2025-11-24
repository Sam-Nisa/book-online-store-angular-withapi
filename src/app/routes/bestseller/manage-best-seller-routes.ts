import {Router, Routes} from '@angular/router';
export const manageBestSellerRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./routes/bestseller.component').then(c => c.BestsellerComponent)

  }
]
