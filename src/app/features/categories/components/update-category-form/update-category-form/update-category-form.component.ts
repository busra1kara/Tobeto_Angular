import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { CategoryListItem } from '../../../models/category-list-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-category-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-category-form.component.html',
  styleUrl: './update-category-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateCategoryFormComponent { 
  updateCategoryFormGroup!: FormGroup;
  categoryId!: number;
  category!: any;
  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.createForm();
    this.getFormValue();
  };

  private createForm() {
      this.updateCategoryFormGroup = this.formBuilder.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
      })
  };

  getFormValue(){
    this.route.params.subscribe(params => {
      this.categoryId = +params['categoryId'];
      this.category = {
        id: this.categoryId,
        name: this.category.name,
        description: this.category.description
      };
    });
  }
}
