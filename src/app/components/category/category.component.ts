import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { categories } from '../../constants/categories';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor, RouterModule, TranslateModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categoryToShow = categories.slice(0, 8);
}
