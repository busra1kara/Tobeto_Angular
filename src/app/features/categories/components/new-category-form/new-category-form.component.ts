import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewCategory } from '../../models/new-category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-new-category-form',
  standalone: true,
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-category-form.component.html',
  styleUrl: './new-category-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCategoryFormComponent implements OnInit { 
  // nameInput: string = '';
  // descriptionInput: string = ''

  newCategoryFormGroup!: FormGroup; 
  // new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   description: new FormControl('', [Validators.required])
  // });

  // constructor(private formBuilder: FormBuilder){
  //   this.newCategoryFormGroup = this.formBuilder.group({
  //     name: ['', [Validators.required]],
  //     description: ['', [Validators.required]],
  //   })
  // }

  constructor(private formBuilder: FormBuilder, private categoryService: CategoriesService){}

  ngOnInit(): void {
    this.createForm();
  };

  private createForm() {
      this.newCategoryFormGroup = this.formBuilder.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
      })
  };

  add() {
    const newCategory: NewCategory = {
      name: this.newCategoryFormGroup.value.name,
      description: this.newCategoryFormGroup.value.description
    }

    this.categoryService.add(newCategory).subscribe({
      next: (addedCategory) => {
        console.log('category added', addedCategory);
      },
      error: (error) => {
        console.error('error adding category', error);
      },
      complete: () => {
        //Observable yapı tamamen bittiğinde, next bir daha çalışmadığında complete çalışmış oluyor
        console.log('Complete adding category');
      }
    });
  };

  onFormSubmit(){
    if(this.newCategoryFormGroup.invalid){
      console.error('Form is invalid');
      return;
    };

    this.add();
  };
}
