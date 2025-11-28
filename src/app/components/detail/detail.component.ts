import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../types/book.model';
import { categories } from '../../constants/categories';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, LoadingComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  // Current book to display
  book!: Book | undefined;

  // Category name of the book
  categoryName: string = '';

  activeTab: string = 'description';
  quantity: number = 1;
  isInWishlist: boolean = false;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.fetchBookDetails();
  }

  /** Fetch book details by ID from the route */
  private fetchBookDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.bookService.getBookById(id).subscribe({    //getBookByID call from book.service.ts
      next: (book) => {
        this.book = book;

        // Find category name // component map catID
        const cat = categories.find(c => c.id === (book.categoryId ?? -1));
        this.categoryName = cat ? cat.name : 'Unknown';

        this.loading = false;
      },
      error: () => {
        console.error('Book not found with id:', id);
        this.book = undefined;
        this.categoryName = '';
        this.loading = false;
      }
    });
  }

  /** Set the active tab in UI */
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  /** Increase the quantity */
  increaseQuantity(): void {
    this.quantity++;
  }

  /** Decrease the quantity (min 1) */
  decreaseQuantity(): void {
    if (this.quantity > 1) this.quantity--;
  }

  /** Add the current book to the cart */
  addToCart(): void {
    console.log('Added to cart:', this.book);
  }

  /** Toggle wishlist status */
  toggleWishlist(): void {
    this.isInWishlist = !this.isInWishlist;
  }
}
