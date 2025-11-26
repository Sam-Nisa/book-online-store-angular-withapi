import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../types/book.model';
import { categories } from '../../constants/categories';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  book!: Book | undefined;
  categoryName: string = '';
  activeTab: string = 'description';
  quantity: number = 1;
  isInWishlist: boolean = false;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.bookService.getBookById(id).subscribe({
      next: (book) => {
        this.book = book;

        const cat = categories.find(c => c.id === (book.categoryId ?? -1));
        this.categoryName = cat ? cat.name : 'Unknown';
      },
      error: () => {
        console.error('Book not found with id:', id);
        this.book = undefined;
        this.categoryName = '';
      }
    });
  }

  setActiveTab(tab: string) { this.activeTab = tab; }
  increaseQuantity() { this.quantity++; }
  decreaseQuantity() { if (this.quantity > 1) this.quantity--; }
  addToCart() { console.log('Added to cart:', this.book); }
  toggleWishlist() { this.isInWishlist = !this.isInWishlist; }
}
