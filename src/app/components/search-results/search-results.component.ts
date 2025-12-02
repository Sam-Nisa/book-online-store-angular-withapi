import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../types/book.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule] // Added RouterModule here
})
export class SearchResultsComponent implements OnInit {
  searchQuery: string = '';
  books: Book[] = [];
  isLoading: boolean = false;
  noResults: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] || '';
      if (this.searchQuery) {
        this.performSearch();
      }
    });
  }

  performSearch() {
    this.isLoading = true;
    this.noResults = false;

    this.bookService.searchBooksByTitle(this.searchQuery).subscribe({
      next: (results) => {
        this.books = results;
        this.isLoading = false;
        this.noResults = results.length === 0;
      },
      error: (error) => {
        console.error('Search error:', error);
        this.isLoading = false;
        this.noResults = true;
      }
    });
  }
}
