import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: ProductModel[] = []

  constructor() { }

  addToCart(product: ProductModel){
    this.items.push(product);
  }

  getItems(): ProductModel[]{
    return this.items;
  }


}
