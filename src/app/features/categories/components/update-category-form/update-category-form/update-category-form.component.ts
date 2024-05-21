import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { CategoryListItem } from '../../../models/category-list-item';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatedCategory } from '../../../models/updated-category';

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
  updatedCategory!: UpdatedCategory;
  
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private categoryService: CategoriesService){}

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
      this.categoryService.getCategoryById(this.categoryId).subscribe(category => {
        this.category = category;
        this.updateCategoryFormGroup.patchValue({
          name: this.category.name,
          description: this.category.description
        });
      });
    });
  };

  update(){
    this.route.params.subscribe(params => {
      this.categoryId = +params['categoryId'];
      this.categoryService.getCategoryById(this.categoryId).subscribe(category => {
        category.name = this.updateCategoryFormGroup.value.name;
        category.description = this.updateCategoryFormGroup.value.description;
        this.updatedCategory = {
          id: category.id,
          name: category.name,
          description: category.description
        }
        this.updatedCategoryWithService();
      })
    })
  }

  updatedCategoryWithService(){
    this.categoryService.update(this.categoryId, this.updatedCategory).subscribe(updatedCategory => {
      this.router.navigate(['categories', 'tablepage']);
    })
  }

  onFormSubmit(){
    this.update();
  }
}
