// export interface Product {
//   $key: string;
//   title: string;
//   price: number;
//   category: string;
//   imageUrl: string;
// }
export class Product {
  $key: string;
  title: string;
  price: number;
  category: string;
  imageUrl: string;

  constructor(
    $key: string,
    title: string,
    price: number,
    category: string,
    imageUrl: string
  ) {
    this.$key = $key;
    this.title = title;
    this.price = price;
    this.category = category;
    this.imageUrl = imageUrl;
  }
}
