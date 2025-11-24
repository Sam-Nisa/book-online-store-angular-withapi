import { Routes } from '@angular/router';

export const manageCategoriedBookRoutes: Routes = [

  {
    path: ':categoryId',
    loadComponent: () => import('./routes/categoried-book.component').then(c=>c.default)
  },

]
