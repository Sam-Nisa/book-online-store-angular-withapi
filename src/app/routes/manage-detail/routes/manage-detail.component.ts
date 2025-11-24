import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { books} from '../../../constants/book';
import {Book} from '../../../types/book.model';
import {DetailComponent} from '../../../components/detail/detail.component';

@Component({
  selector: 'app-manage-detail',
  standalone: true, // Add this
  imports: [
    DetailComponent
  ],
  templateUrl: './manage-detail.component.html',
  styleUrl: './manage-detail.component.scss'
})
export class ManageDetailComponent implements OnInit {
  book!: Book | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Better to use ngOnInit for route params
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.book = books.find(book => book.id === id);
    });
  }

  protected readonly books = books;
}
