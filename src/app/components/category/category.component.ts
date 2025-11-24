import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgFor} from '@angular/common';
import {categories} from '../../constants/categories';

@Component({
  selector: 'app-category',
  imports: [NgFor , RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
    categoryToShow = categories.slice(0, 8);
}
