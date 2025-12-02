import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Book } from '../types/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://gutendex.com/books/';

  constructor(private http: HttpClient) {}

  // ============================
  // GET ALL BOOKS
  // ============================
  getBooks(): Observable<Book[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response =>
        response.results.map((item: any) => this.transformBook(item))
      )
    );
  }

  // ============================
  // GET BOOK BY ID
  // ============================
  getBookById(id: number): Observable<Book> {
    return this.http.get<any>(`${this.apiUrl}?ids=${id}`).pipe(
      map(response => {
        const item = response.results[0];
        return this.transformBook(item);
      })
    );
  }

  // ============================
  // MAP API BOOK → Your Book Interface
  // ============================
  private transformBook(item: any): Book {
    return {
      id: item.id,
      images: item.formats['image/jpeg'] || 'https://placehold.co/400x600',
      title: item.title,
      authors: item.authors || [],
      price: this.generatePrice(),
      summaries: item.summaries?.[0] || 'No summary available',
      subjects: item.subjects || [],
      languages: item.languages?.join(', ') || 'Unknown',
      categoryId: Math.floor(Math.random() * 8) + 1, // since API (gutendex.com) don't have categoryID. so ,randomly assign a categoryId between 1 and 8.
      description: item.subjects?.join(', ') || 'No description available',
      authorName: item.authors?.length
        ? `${item.authors[0].name} `
        : 'No information available.'
    };
  }

  searchBooksByTitle(query: string): Observable<Book[]> {
    const searchUrl = `${this.apiUrl}?search=${encodeURIComponent(query)}`;
    return this.http.get<any>(searchUrl).pipe(
      map(response =>
        response.results.map((item: any) => this.transformBook(item))
      )
    );
  }


  // ============================
  // RANDOM PRICE GENERATOR
  // ============================
  private generatePrice(): number {
    return Math.floor(Math.random() * 20) + 5; // price $5–$24
  }

}
