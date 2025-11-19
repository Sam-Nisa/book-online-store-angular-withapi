import {Routes} from '@angular/router';
import {RootContainerComponent} from './components/root-container/root-container.component';

export const routes: Routes = [
  {
    path: '',
    component: RootContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./routes/home/manage-home-routes').then(c => c.manageHomeRoutes)
      }
    ]
  }
]
