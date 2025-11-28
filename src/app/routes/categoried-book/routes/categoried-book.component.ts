import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {CardComponent} from '../../../components/card/card.component';
import {CommonModule} from '@angular/common';
import {switchMap} from 'rxjs/operators';
import {BookService} from '../../../services/book.service';
import {Book} from '../../../types/book.model';
import {categories} from '../../../constants/categories';
import {LoadingComponent} from '../../../components/loading/loading.component';

@Component({
  selector: 'app-categoried-book',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardComponent,
    LoadingComponent, // <-- Add this here
  ],
  templateUrl: './categoried-book.component.html',
  styleUrls: ['./categoried-book.component.scss']
})
export default class CategoriedBookComponent implements OnInit {

  categoryIdNum: number = 0;
  booksInCategory: Book[] = [];
  categoryName: string = '';
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const idString = params.get('categoryId');
        this.categoryIdNum = Number(idString);
        const category = categories.find(c => c.id === this.categoryIdNum);
        this.categoryName = category ? category.name : 'Unknown Category';
        return this.bookService.getBooks(); // load all books
      })
    )
      .subscribe(
        books => {
          this.booksInCategory = books.filter(     //categoryIdNum comes from the URL parameter
            b => b.categoryId === this.categoryIdNum //only books match this catID  are display.
          );
          this.loading = false;
        },
        error => {
          console.error(error);
          this.loading = false;
        }
      );
  }
}
