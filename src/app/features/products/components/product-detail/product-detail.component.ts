import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../../routes/products/services/products.service';
import { ProductDetail } from '../../models/product-detail';
import { PlaceholderComponent } from '../../../../shared/components/placeholder/placeholder.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { HighlightDirective } from '../../../../shared/directives/highlight.directive';
import { VatPipe } from '../../pipes/vat.pipe';
import { ButtonDirective } from '../../../../shared/directives/button.directive';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule, PlaceholderComponent, ButtonComponent, HighlightDirective, VatPipe, ButtonDirective
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit {

  @Input() id!: number; //OnPush ile değişiklerin algılanması için Input değerinin değişmesi gerekir (1. Olay)

  product!: ProductDetail; //Cevap gelene kadar product undefined, async bir işlem old. için cevap gelse bile konsolda hata oluşabilir. Bunun için yükleme ekranları yapılabilir. Böylelikle kullanıcı için daha efektif bir kullanım sunulur.

  constructor(
    private productsService: ProductsService,
    private change: ChangeDetectorRef
  ) {};

  //Lifescyle metotlarında değişiklerin algılanması için değişikliklerin kontrol edilmesi gerekir (4. Olay)
  ngOnInit(): void {
    this.getDetails();
  };

  getDetails() {
    this.productsService.getDetail(this.id).subscribe((product) => {
      this.product = product;

      this.change.markForCheck(); //OnPush ile değişikliklerin algılanabilmesi için değişikliklerin kontrol edilmesi gerekir. (2. Olay)
    });
  };

  //Kullanıcı herhangi bir olay oluşturduğunda OnPush ile değişikliklerin algılanması için değişikliklerin kontrol edilmesi gerekir. (3. Olay)
  onAddToCard(){

  }
}


