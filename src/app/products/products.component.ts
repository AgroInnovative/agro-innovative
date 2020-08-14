import { Component, OnInit } from '@angular/core';
import { ProductService } from '../admin/product.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];

  category: string;

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
    // let cart = this.cartService.getOrCreateCart();
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {}
}
