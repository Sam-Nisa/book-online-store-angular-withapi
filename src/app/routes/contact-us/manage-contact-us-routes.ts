
import {Router, Routes} from '@angular/router';
export const manageAboutUsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./routes/contact-us.component').then(c => c.ContactUsComponent)

  }
]
