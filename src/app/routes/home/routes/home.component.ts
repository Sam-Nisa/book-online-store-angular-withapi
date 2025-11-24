import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../../components/hero-banner/hero-banner.component';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../../../components/card/card.component';
import { CategoryComponent } from '../../../components/category/category.component';
import { books } from '../../../constants/book';
import { Book } from '../../../types/book.model';
import {FeedbackReaderComponent} from '../../../components/feedback-reader/feedback-reader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroBannerComponent,
    CardComponent,
    FeedbackReaderComponent,
    CategoryComponent,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  newArrival: Book[] = books.slice(0, 8);       // New Arrival: 0–7
  recommended: Book[] = books.slice(8, 16);    // Recommended: 8–15
}
