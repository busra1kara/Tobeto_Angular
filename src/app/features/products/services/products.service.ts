import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductListItem } from '../models/product-list-item';
import { ProductDetail } from '../models/product-detail';
import { environment } from '../../../../environments/environment';
import { PaginatedList } from '../../../core/models/paginated-list';
import { query } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private _products = [] Mock Data yerine Fetch ile Backend'den veri çekeceğiz
 
  private apiControllerUrl = `${environment.apiUrl}/products`

  constructor(private http: HttpClient) { }

  getList(page: number, pageSize: number = 10, filters?: { categoryId?: number }): Observable<PaginatedList<ProductListItem>> {

    const queryParams: any = {};
    if (filters?.categoryId) queryParams.categoryId = filters.categoryId;

    return this.http
      .get<ProductListItem[]>(this.apiControllerUrl, {
        params: queryParams,
          // _page: page.toString(),
          // _limit: pageSize.toString()
      })
      .pipe(
        map((response) => {
          const paginatedList: PaginatedList<ProductListItem> = {
            pageIndex: page,
            pageSize,
            totalItems: response.length,
            items: response.slice(pageSize * (page - 1), pageSize * page),
          };
          return paginatedList;
        }),
        this.setImageToPlaceHolder()) as Observable<PaginatedList<ProductListItem>>;
  }

  getDetail(id: number): Observable<ProductDetail> {
    return this.http
      .get<ProductDetail>(`${this.apiControllerUrl}/${id}`)
      .pipe(this.setImageToPlaceHolder()) as Observable<ProductDetail>;
  }

  private setImageToPlaceHolder(){
    return map((response: ProductDetail | PaginatedList<ProductListItem>) =>{
      if((response as PaginatedList<ProductListItem>).items instanceof Array)
        for(const productListItem of (response as PaginatedList<ProductListItem>).items)
          productListItem.imageUrl = 'https://via.placeholder.com/200';
      else (response as ProductDetail).imageUrl = 'https://via.placeholder.com/500';
      
      return response;
    })
  }
}
