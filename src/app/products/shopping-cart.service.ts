import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime(),
    });
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId);
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(product) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.key);

    item$
      .snapshotChanges()
      .pipe(take(1))
      .subscribe((item: any) => {
        if (item.payload.exists())
          item$.update({
            product: {
              title: product.payload.val().title,
              category: product.payload.val().category,
              imageUrl: product.payload.val().imageUrl,
              price: product.payload.val().price,
            },
            quantity: item.payload.exportVal().quantity + 1,
          });
        else
          item$.update({
            product: {
              title: product.payload.val().title,
              category: product.payload.val().category,
              imageUrl: product.payload.val().imageUrl,
              price: product.payload.val().price,
            },
            quantity: 1,
          });
      });
  }
}
