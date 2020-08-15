import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../products/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  CartItemCount: number;
  cart$: any;
  cart;
  productIds;

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();

    this.cart$.valueChanges().subscribe((cart) => {
      this.CartItemCount = this.shoppingCartService.getTotalItemCount(cart);
      this.productIds = this.shoppingCartService.getProductIds(cart);
      this.cart = cart;
      console.log(this.productIds);
    });
  }
}
