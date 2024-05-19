import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-update-category-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './update-category-page.component.html',
  styleUrl: './update-category-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateCategoryPageComponent { }
