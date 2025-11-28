import {Component, Input} from '@angular/core';
import {Book} from '../../types/book.model';
import {NgFor} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() booksToShow: Book[] = [];

}
