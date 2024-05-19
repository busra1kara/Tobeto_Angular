import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-initial-learn',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './initial-learn.component.html',
  styleUrl: './initial-learn.component.scss'
})
export class InitialLearnComponent {
  title : string = 'northwind';

  cartCount : number = 0;

  products : {name: string, price : number, disContinued : boolean} [] = [
    {
      name: "Çay",
      price: 50,
      disContinued : false
    },
    {
      name: "Kahve",
      price: 200,
      disContinued : true
    },
    {
      name: "Su",
      price: 30,
      disContinued : false
    },
    {
      name: "MeyveSuyu",
      price: 130,
      disContinued : true
    },
    {
      name: "Maden Suyu",
      price: 70,
      disContinued : false
    },
  ]

  onAddProductToCart() : void {
    this.cartCount++;
  }
}
