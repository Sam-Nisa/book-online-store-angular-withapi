import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { books } from '../../constants/book';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.book = books.find(b => b.id === id);

    if (this.book) {
      // @ts-ignore
      const cat = categories.find(c => c.id === this.book.categoryId);
      this.categoryName = cat ? cat.name : 'Unknown';
    }

  }

  setActiveTab(tab: string) { this.activeTab = tab; }
  increaseQuantity() { this.quantity++; }
  decreaseQuantity() { if (this.quantity > 1) this.quantity--; }
  addToCart() { console.log('Added to cart:', this.book); }
  toggleWishlist() { this.isInWishlist = !this.isInWishlist; }
}
