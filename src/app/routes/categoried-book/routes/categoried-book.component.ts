import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardComponent } from '../../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../types/book.model';
import { categories } from '../../../constants/categories';
import { LoadingComponent } from '../../../components/loading/loading.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-categoried-book',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    CardComponent,
    LoadingComponent
  ],
  templateUrl: './categoried-book.component.html',
  styleUrls: ['./categoried-book.component.scss']
})
export default class CategoriedBookComponent implements OnInit {
  categoryIdNum: number = 0;
  booksInCategory: Book[] = [];
  categoryName: string = '';
  loading: boolean = true;
  category: any = null;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const idString = params.get('categoryId');
        this.categoryIdNum = Number(idString);
        this.category = categories.find(c => c.id === this.categoryIdNum);
        this.categoryName = this.category ? this.translate.instant(this.category.name) : this.translate.instant('categories.unknown');
        return this.bookService.getBooks();
      })
    ).subscribe({
      next: (books) => {
        this.booksInCategory = books.filter(b => b.categoryId === this.categoryIdNum);
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      }
    });
  }
}
