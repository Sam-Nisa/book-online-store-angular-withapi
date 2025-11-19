import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../layouts/header/header.component';
import {FooterComponent} from '../layouts/footer/footer.component';

@Component({
  selector: 'app-root-container',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './root-container.component.html',
  styleUrl: './root-container.component.scss'
})
export class RootContainerComponent {

  constructor() {}
}
