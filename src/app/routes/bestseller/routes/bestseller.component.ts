import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { PageHeadingComponent } from '../../../components/page-heading/page-heading.component';
import { CardComponent } from '../../../components/card/card.component';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../types/book.model';
import {LoadingComponent} from '../../../components/loading/loading.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-bestseller',
  standalone: true,
  imports: [PageHeadingComponent, RouterOutlet, CardComponent, LoadingComponent, NgIf, RouterLink],
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.scss']

})
export class BestsellerComponent implements OnInit {

  booksToShow: Book[] = [];
  loading: boolean = true;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.booksToShow = books.slice(0, 20);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });

  }
}
