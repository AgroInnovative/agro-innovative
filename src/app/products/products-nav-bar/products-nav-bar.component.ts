import { Component, OnInit } from '@angular/core';
import { ShoppingCartComponent } from './../../shopping-cart/shopping-cart.component';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css'],
})
export class ProductsNavBarComponent implements OnInit {
  shoppingCartItemCount: number;

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    let cart$: any = await this.shoppingCartService.getCart();
    cart$.valueChanges().subscribe((cart) => {
      this.shoppingCartItemCount = 0;
      for (let productId in cart.items)
        this.shoppingCartItemCount += cart.items[productId].quantity;
    });
  }
}
