import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css'],
})
export class ProductsNavBarComponent implements OnInit {
  CartItemCount: number;

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    let cart$: any = await this.shoppingCartService.getCart();

    cart$.valueChanges().subscribe((cart) => {
      this.CartItemCount = this.shoppingCartService.getTotalItemCount(cart);
    });
  }
}
