// import {Component} from '@angular/core';
// import {RouterOutlet} from '@angular/router';
// import {PageHeadingComponent} from '../../../components/page-heading/page-heading.component';
//
// @Component({
//   selector: 'app-bestseller',
//   imports: [
//     PageHeadingComponent,
//     RouterOutlet
//   ],
//   templateUrl: './bestseller.component.html',
//   styleUrl: './bestseller.component.scss'
// })
// export class BestsellerComponent {
//
// }

// src/app/pages/bestseller/bestseller.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeadingComponent } from '../../../components/page-heading/page-heading.component';
import { CardComponent } from '../../../components/card/card.component'; // path to your card
import { books } from '../../../constants/book'; // path to your books.ts
import { Book } from '../../../types/book.model';

@Component({
  selector: 'app-bestseller',
  standalone: true,
  imports: [PageHeadingComponent, RouterOutlet, CardComponent],
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.scss']
})
export class BestsellerComponent {
  booksToShow: Book[] = books.slice(1, 20); // slice 16 books (index 4-19)
}

