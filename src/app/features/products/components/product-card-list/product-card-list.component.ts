import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductListItem } from '../../models/product-list-item';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ProductsService } from '../../../../routes/products/services/products.service';
import { take } from 'rxjs';
import { VatPipe } from '../../pipes/vat.pipe';

@Component({
  selector: 'app-product-card-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    VatPipe
  ],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardListComponent implements OnInit {

  @Input() filterByCategoryId: number | null = null;
  @Output() viewProduct = new EventEmitter<ProductListItem>();

  productList!: ProductListItem [];

  constructor(private productService: ProductsService, private change: ChangeDetectorRef){};

  ngOnInit(): void {
    this.getProductList();
  }

  // getProductList() {
  //   this.productService.getList().subscribe((productList) => {
  //     this.productList = productList;
  //   }).unsubscribe();
  // } Bu şekilde cevap henüz gelmeden unsubscribe olduğu için görüntülemede sorun olacaktır

  getProductList() {
    this.productService.getList()
    .pipe(take(1))
    .subscribe((productList) => {
      this.productList = productList;
      this.change.markForCheck();
    });
  }

  get filteredProductList(): ProductListItem[] {
    let filteredProductList = this.productList;

    if(this.filterByCategoryId){
      filteredProductList = this.productList.filter(product => product.categoryId === this.filterByCategoryId)
    }

    return filteredProductList;
  };

  onViewProduct(product: ProductListItem) {
    this.viewProduct.emit(product);
  } 
}
