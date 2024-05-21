import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UpdateCategoryFormComponent } from '../../../../features/categories/components/update-category-form/update-category-form/update-category-form.component';

@Component({
  selector: 'app-update-category-page',
  standalone: true,
  imports: [
    CommonModule,
    UpdateCategoryFormComponent
  ],
  templateUrl: './update-category-page.component.html',
  styleUrl: './update-category-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateCategoryPageComponent { }
