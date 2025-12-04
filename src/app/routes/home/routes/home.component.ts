import {Component, OnInit} from '@angular/core';
import {HeroBannerComponent} from '../../../components/hero-banner/hero-banner.component';
import {RouterOutlet} from '@angular/router';
import {CardComponent} from '../../../components/card/card.component';
import {CategoryComponent} from '../../../components/category/category.component';
import {Book} from '../../../types/book.model';
import {FeedbackReaderComponent} from '../../../components/feedback-reader/feedback-reader.component';
import {BookService} from '../../../services/book.service';
import {LoadingComponent} from '../../../components/loading/loading.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroBannerComponent,
    CardComponent,
    FeedbackReaderComponent,
    CategoryComponent,
    RouterOutlet,
    LoadingComponent,
    NgIf,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newArrival: Book[] = [];
  recommended: Book[] = [];
  loading = true;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      (books) => {
        this.newArrival = books.slice(0, 8);      // First 8
        this.recommended = books.slice(8, 16);    // Next 8
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }


}
