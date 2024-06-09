import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailComponent } from '../../../features/products/components/product-detail/product-detail.component';
import { LoadingService } from '../../../core/services/loading.service';
import { ProductsService } from '../../../features/products/services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [
    CommonModule, 
    // BasicLayoutComponent, ==> CommonModule ve BasicLayoutComponent SharedModule'de oldukları için yine bu komponentlerin önceden standalone olmaları nedeniyle bağımsız şekilde kullanılmaları sona erdi. Artık SharedModule ile birlikte geliyorlar
    ProductDetailComponent
  ],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPageComponent implements OnInit { 
  productId!: number;
  productDetails: any;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private productService: ProductsService, 
    private loadingService: LoadingService,
    private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getProductIdFromRoute();
  }

  getProductIdFromRoute() {
    this.route.params.subscribe((params) => {
      const productId = Number(params['productId']);
      if(productId) {
        this.productId = productId;
        this.fetchProductDetails();
      }
      else {
        this.router.navigate(['/']); //ProductID yoksa hata fırlatacak ve ana sayfaya yönlendirecek
        throw new Error('Product ID is invalid');
      }
    }).unsubscribe();
  }

  fetchProductDetails() {
    this.loadingService.showLoading();
    this.productService.getDetail(this.productId) 
      .subscribe({
        next: (data) => {
          console.log(data);
          this.productDetails = data;
          this.loadingService.hideLoading();
          this.cdRef.detectChanges();
        },
        error: (error) => {
          console.error('Error fetching product details', error);
          this.loadingService.hideLoading();
          this.router.navigate(['/']); // Hata durumunda ana sayfaya yönlendirme
        }
      });
  }
}
