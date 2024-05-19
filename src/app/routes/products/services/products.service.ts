import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListItem } from '../../../features/products/models/product-list-item';
import { ProductDetail } from '../../../features/products/models/product-detail';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private _products = [] Mock Data yerine Fetch ile Backend'den veri çekeceğiz
 
  private apiControllerUrl = `${environment.apiUrl}/products`

  constructor(private http: HttpClient) { }

  getList(): Observable<ProductListItem[]> {
    return this.http.get<ProductListItem[]>(this.apiControllerUrl);
  }

  getDetail(id: number): Observable<ProductDetail> {
    return this.http.get<ProductDetail>(`${this.apiControllerUrl}/${id}`)
  }
}
