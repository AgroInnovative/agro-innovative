import { Component, OnInit } from '@angular/core';
import { ProductService } from '../admin/product.service';
import { CategoryService } from '../admin/product-form/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories$;
  category: string;

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    categoryService: CategoryService
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
    this.categories$ = categoryService.getAll();
  }

  ngOnInit(): void {}
}
