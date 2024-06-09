import { Routes } from "@angular/router";
import { NewCategoryPageComponent } from "./new-category-page/new-category-page.component";
import { NewCategoryFormComponent } from "../../features/categories/components/new-category-form/new-category-form.component";
import { CategoryTablePageComponent } from "./category-table-page/category-table-page.component";
import { UpdateCategoryFormComponent } from "../../features/categories/components/update-category-form/update-category-form/update-category-form.component";
import { UpdateCategoryPageComponent } from "./update-category-page/update-category-page/update-category-page.component";
import { dirtyGuard } from "../../core/guards/dirty.guard";

export const categoriesRoutes: Routes = [
    {
        path: 'categories/new',
        // component: NewCategoryPageComponent,
        component: NewCategoryFormComponent,
        canDeactivate: [dirtyGuard]
    },
    {
        path: 'categories/tablepage',
        component: CategoryTablePageComponent
    },
    {
        path: 'categories/update/:categoryId',
        component: UpdateCategoryPageComponent
    }
]