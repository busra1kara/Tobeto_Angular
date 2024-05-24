import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailComponent } from '../../../features/products/components/product-detail/product-detail.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [
    // CommonModule, 
    // BasicLayoutComponent, ==> CommonModule ve BasicLayoutComponent SharedModule'de oldukları için yine bu komponentlerin önceden standalone olmaları nedeniyle bağımsız şekilde kullanılmaları sona erdi. Artık SharedModule ile birlikte geliyorlar
    SharedModule,
    ProductDetailComponent
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
