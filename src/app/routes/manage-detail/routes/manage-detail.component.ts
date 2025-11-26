import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../types/book.model';
import { DetailComponent } from '../../../components/detail/detail.component';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-manage-detail',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './manage-detail.component.html',
  styleUrl: './manage-detail.component.scss'
})
export class ManageDetailComponent implements OnInit {

  book!: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = Number(params['id']);

      // Fetch book from API instead of constants
      this.bookService.getBookById(id).subscribe(apiBook => {
        this.book = apiBook;
      });
    });
  }
}
