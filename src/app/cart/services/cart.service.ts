import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // думаю, что тип должен содержать дополнительные поля
  private items: ProductModel[] = []

  constructor() { }

  addToCart(product: ProductModel){
    this.items.push(product);
  }

  getItems(): ProductModel[]{
    return this.items;
  }


}
