import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,   // 👈 important for standalone usage
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() message: string = 'Loading...';
}
