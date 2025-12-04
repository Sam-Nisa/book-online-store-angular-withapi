import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../types/book.model';
import { categories } from '../../constants/categories';
import { LoadingComponent } from '../loading/loading.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, LoadingComponent, TranslateModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  book: Book | undefined;
  categoryName: string = '';
  activeTab: string = 'description';
  quantity: number = 1;
  isInWishlist: boolean = false;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.fetchBookDetails();
  }

  private fetchBookDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.bookService.getBookById(id).subscribe({
      next: (book) => {
        this.book = book;
        this.updateCategoryName(book.categoryId);
        this.loading = false;
      },
      error: () => {
        console.error('Book not found with id:', id);
        this.book = undefined;
        this.loading = false;
      }
    });
  }

  private updateCategoryName(categoryId: number | undefined): void {
    if (!categoryId) {
      this.categoryName = this.translate.instant('categories.unknown');
      return;
    }

    const category = categories.find(c => c.id === categoryId);
    if (category) {
      const categoryKey = category.name.replace('categories.', '');
      this.categoryName = this.translate.instant(`categories.${categoryKey}`);
    } else {
      this.categoryName = this.translate.instant('categories.unknown');
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart(): void {
    console.log('Added to cart:', this.book);
  }

  toggleWishlist(): void {
    this.isInWishlist = !this.isInWishlist;
  }
}
