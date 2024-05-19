import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BasicLayoutComponent } from '../../../shared/components/basic-layout/basic-layout.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailComponent } from '../../../features/products/components/product-detail/product-detail.component';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [
    CommonModule, BasicLayoutComponent, ProductDetailComponent
  ],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPageComponent implements OnInit { 
  productId!: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProductIdFromRoute();
  }

  getProductIdFromRoute() {
    this.route.params.subscribe((params) => {
      const productId = Number(params['productId']);
      if(productId) this.productId = productId;
      else {
        this.router.navigate(['/']); //ProductID yoksa hata fırlatacak ve ana sayfaya yönlendirecek
        throw new Error('Product ID is invalid');
      }
    }).unsubscribe();
  }
}