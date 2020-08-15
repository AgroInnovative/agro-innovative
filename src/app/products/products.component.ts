import { Component, OnInit, Input, Pipe, OnDestroy } from '@angular/core';
import { ProductService } from '../admin/product.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from './shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: any[] = [];
  filteredProducts: any[] = [];
  category: string;

  cart: any;
  subscription: Subscription;

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    private cartService: ShoppingCartService
  ) {
    productService.getAll().subscribe((products) => {
      this.filteredProducts = this.products = products;

      route.queryParamMap.subscribe((params) => {
        this.category = params.get('category');

        this.filteredProducts = this.category
          ? this.products.filter(
              (p) => p.payload.val().category === this.category
            )
          : this.products;
      });
    });
  }

  addToCart(product) {
    //Add to cart after clicking button
    this.cartService.addToCart(product);
  }

  removeFromCart(product) {
    this.cartService.removeFromCart(product);
  }

  getQuantity(product) {
    //Display the quantity of each product near the product
    if (!this.cart) return 0;
    console.log(this.cart);
    let item = this.cart.items[product.key];
    return item ? item.quantity : 0;
  }

  async ngOnInit() {
    //Get the cart of current user
    this.subscription = (await this.cartService.getCart())
      .valueChanges()
      .subscribe((cart) => (this.cart = cart));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
