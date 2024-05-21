import { Routes } from "@angular/router";
import { NewCategoryPageComponent } from "./new-category-page/new-category-page.component";
import { CategoryTablePageComponent } from "./category-table-page/category-table-page.component";
import { UpdateCategoryFormComponent } from "../../features/categories/components/update-category-form/update-category-form/update-category-form.component";
import { UpdateCategoryPageComponent } from "./update-category-page/update-category-page/update-category-page.component";

export const categoriesRoutes: Routes = [
    {
        path: 'categories/new',
        component: NewCategoryPageComponent
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