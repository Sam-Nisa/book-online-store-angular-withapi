import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardComponent } from '../../../components/card/card.component';
import { books } from '../../../constants/book';
import { Book } from '../../../types/book.model';
import { categories } from '../../../constants/categories';
import {Category} from '../../../types/category.model';
import { switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-categoried-book',

  standalone: true,
  imports: [CardComponent, CommonModule, RouterModule],
  templateUrl: './categoried-book.component.html',
  styleUrls: ['./categoried-book.component.scss']
})
class CategoriedBookComponent implements OnInit {
  categoryId: string = '';
  categoryIdNum: number = 0;
  booksInCategory: Book[] = [];
  categoryName: string = '';

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.paramMap.pipe(

      switchMap(params => {
        const idString = params.get('categoryId');
        if (idString) {
          this.categoryId = idString;
          this.categoryIdNum = Number(idString);


          this.loadCategoryData();
        }

        return of(null);
      })
    ).subscribe();


  }


  loadCategoryData() {

    this.booksInCategory = books.filter(book => book.categoryId === this.categoryIdNum);


    const category = categories.find(c => c.id === this.categoryIdNum);
    this.categoryName = category ? category.name : 'Unknown Category';

    console.log(`Updated to category: ${this.categoryName} (${this.categoryIdNum})`);
  }


}

export default CategoriedBookComponent
