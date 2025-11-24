import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./routes/login/login.component').then(m => m.LoginComponent)
  },
  {
    path:'register',
    loadComponent: () => import('./routes/register/register.component').then(m => m.RegisterComponent)
  }
]
