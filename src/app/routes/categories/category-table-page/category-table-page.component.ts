import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../features/categories/services/categories.service';
import { CategoryListItem } from '../../../features/categories/models/category-list-item';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../../../shared/components/basic-layout/basic-layout.component';

@Component({
  selector: 'app-category-table-page',
  standalone: true,
  imports: [
    CommonModule,
    BasicLayoutComponent,
    RouterModule
  ],
  templateUrl: './category-table-page.component.html',
  styleUrl: './category-table-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryTablePageComponent implements OnInit {

  categories: CategoryListItem [] = [];

  constructor(private categoryService: CategoriesService, private change: ChangeDetectorRef, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getList().subscribe((categories) => {
      this.categories = categories;
      this.change.markForCheck();
    });
  }

  // mapCategories() {
  //   return this.categories.map(category => {
  //     const categoryListItem : CategoryListItem = {
  //       id: category.id,
  //       name: category.name,
  //       description: category.description
  //     };
  //     return categoryListItem;
  //   });
  // }

  onButtonClick(category: CategoryListItem) {
    this.router.navigate(['categories', 'update', category.id], { state: { category: category } });
    console.log(category.id);
  }
}
