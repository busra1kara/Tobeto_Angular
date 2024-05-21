import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryListItem } from '../models/category-list-item';
import { NewCategory } from '../models/new-category';
import { AddedCategory } from '../models/added-category';
import { UpdatedCategory } from '../models/updated-category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiControllerUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) { }

  getList(): Observable<CategoryListItem[]>{
    return this.http.get<CategoryListItem[]>(this.apiControllerUrl);
  }

  getCategoryById(id: number): Observable<CategoryListItem> {
    return this.http.get<CategoryListItem>(`${this.apiControllerUrl}/${id}`)
  }

  add(category: NewCategory): Observable<AddedCategory>{
    return this.http.post<AddedCategory>(this.apiControllerUrl, category)
  } //NewCategory alacak AddedCategory verecek

  update(id: number, category: UpdatedCategory): Observable<UpdatedCategory> {
    console.log(category);
    return this.http.put<UpdatedCategory>(`${this.apiControllerUrl}/${id}`, category);
  }

}
