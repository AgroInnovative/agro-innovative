import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../products/shopping-cart.service';
import { Subscription } from 'rxjs';
import { OrderService } from './order.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shipping = { name: '', addressLine1: '', addressLine2: '', city: '' };
  cart: any;
  cartItemsArray: any[] = [];
  productIds;
  sumOfCart: number;
  userId: string;
  cartSubscription: Subscription;
  userSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService,
    private shoppingCartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();

    this.cartSubscription = cart$.valueChanges().subscribe((cart) => {
      this.cart = cart;
      //calculate sum of all in cart
      this.productIds = this.shoppingCartService.getProductIds(cart);
      this.sumOfCart = 0;
      for (let productId of this.productIds) {
        this.sumOfCart +=
          this.cart.items[productId].product.price *
          this.cart.items[productId].quantity;

        this.cartItemsArray.push(this.cart.items[productId]);
      }
    });

    this.userSubscription = this.authService.user$.subscribe(
      (user) => (this.userId = user.uid)
    );
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = {
      userId: this.userId,
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
      items: this.cartItemsArray.map((i) => {
        return {
          product: {
            title: i.product.title,
            imageUrl: i.product.imageUrl,
            price: i.product.price,
          },
          quantity: i.quantity,
          total: i.product.price * i.quantity,
        };
      }),
      totalPrice: this.sumOfCart,
    };

    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }
}
