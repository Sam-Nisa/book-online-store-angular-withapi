// app-routing.module.ts
import {Routes} from '@angular/router';
import {RootContainerComponent} from './components/root-container/root-container.component';


export const routes: Routes = [
  {
    path: '',
    component: RootContainerComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: 'home',
        loadChildren: () => import('./routes/home/manage-home-routes').then(m => m.manageHomeRoutes)
      },
      {
        path: 'auth',
        loadChildren: () => import('./routes/auth/manage-auth-route').then(m => m.authRoutes)
      },
      {
        path: 'about-us',
        loadChildren: () => import('./routes/about-us/manage-about-us-routes').then(m => m.manageAboutUsRoutes)
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
        path:'category',
        loadChildren:()=> import('./routes/categoried-book/manage-categoried-book-routes').then(m=>m.manageCategoriedBookRoutes)
      }
    ]
  }
];
