import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { PanelLayoutComponent } from '../../../shared/components/panel-layout/panel-layout/panel-layout.component';
import { NewCategoryFormComponent } from '../../../features/categories/components/new-category-form/new-category-form.component';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../../../core/guards/dirty.guard';

@Component({
  selector: 'app-new-category-page',
  standalone: true,
  imports: [
    CommonModule, 
    PanelLayoutComponent,
    NewCategoryFormComponent
  ],
  templateUrl: './new-category-page.component.html',
  styleUrl: './new-category-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCategoryPageComponent implements CanComponentDeactivate { 
  @ViewChild(NewCategoryFormComponent) newCategoryFormComponent!: NewCategoryFormComponent;

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.newCategoryFormComponent.canDeactivate();
  }
}
