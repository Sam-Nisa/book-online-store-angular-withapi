import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeadingComponent } from '../../../components/page-heading/page-heading.component';
import { CardComponent } from '../../../components/card/card.component';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../types/book.model';

@Component({
  selector: 'app-bestseller',
  standalone: true,
  imports: [PageHeadingComponent, RouterOutlet, CardComponent],
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.scss']
})
export class BestsellerComponent implements OnInit {

  booksToShow: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      // Slice the first 20 books as “bestsellers”
      this.booksToShow = books.slice(0, 20);
    });
  }
}
