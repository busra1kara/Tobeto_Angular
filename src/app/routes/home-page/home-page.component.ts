import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryListGroupComponent } from '../../features/categories/components/category-list-group/category-list-group.component';
import { ProductCardListComponent } from '../../features/products/components/product-card-list/product-card-list.component';
import { ProductListItem } from '../../features/products/models/product-list-item';
import { SharedModule } from '../../shared/shared.module';
import { IfNotDirective } from '../../shared/directives/if-not.directive';
import { LocalStorageService } from '../../core/browser/services/local-storage.service';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SharedModule,
    RouterModule,
    // BasicLayoutComponent,
    CategoryListGroupComponent,
    ProductCardListComponent,
    IfNotDirective
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {

  now = new Date();
    
  selectedCategoryId: number | null = null;

  oldUser: boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private change: ChangeDetectorRef,
    private localStorageService: LocalStorageService
  ) {};

  ngOnInit(): void {
    this.getProductFiltersFromRoute();
    this.detectOldUser();
  }
  
  detectOldUser() {
    const isOldUser = this.localStorageService.get<boolean>('isOldUser'); //Tarayıcının yerel deposunda isOldUser key'ine ait bir value varsa getItem bu value'yu döner.
    if(!isOldUser){
      this.localStorageService.set('isOldUser', 'true'); //Tarayıcıda isOldUSer yoksa bu isimde bir key oluştur değerini de true yap
      return;
    }
    setTimeout(() => {
      this.oldUser = isOldUser;
      this.change.markForCheck();
    }, 5000);
  }
;

  getProductFiltersFromRoute(){
    this.route.queryParams.subscribe((queryParams) => {
      const categoryId = queryParams['categoryId'];
      if(categoryId) this.selectedCategoryId = Number(categoryId);
    }).unsubscribe();
  };

  onChangeCategorySelect(event: number | null) {
    this.selectedCategoryId = event;
    this.router.navigate([], {
      queryParams: {categoryId: this.selectedCategoryId},
      relativeTo: this.route,
    })
  };

  onViewProduct(product: ProductListItem) {
    this.router.navigate(['products', 'detail', product.id]);
  }
 }
