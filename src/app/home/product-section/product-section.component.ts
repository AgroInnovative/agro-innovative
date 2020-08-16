import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css'],
})
export class ProductSectionComponent implements OnInit {
  loginImage = 'assets/img/shopping-cart/login.JPG';
  shoppingImage1 = 'assets/img/shopping-cart/shopping1.JPG';
  shoppingImage2 = 'assets/img/shopping-cart/shopping2.JPG';
  shoppingImage3 = 'assets/img/shopping-cart/shopping3.JPG';
  constructor() {}

  ngOnInit(): void {}
}
