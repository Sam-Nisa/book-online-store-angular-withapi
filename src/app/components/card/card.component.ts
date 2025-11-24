import { Component, Input } from '@angular/core';
import { Book } from '../../types/book.model';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // each element
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.7s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class CardComponent {
  @Input() booksToShow: Book[] = [];
}
