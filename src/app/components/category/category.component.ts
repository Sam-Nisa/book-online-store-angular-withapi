import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { categories } from '../../constants/categories';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categoryToShow = categories.slice(0, 8);
}
