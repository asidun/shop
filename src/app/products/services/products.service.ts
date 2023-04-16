import { Injectable } from '@angular/core';
import { Category } from 'src/app/first-component/category.enum';
import { Product, ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: ProductModel[] = [
    new Product(1, 'Product 1', 'Description 1', 99.1, Category.Books, true),
    new Product(2, 'Product 2', 'Description 2', 29.1, Category.Books, true),
    new Product(3, 'Product 3', 'Description 3', 39.1, Category.Books, true)
  ]

  constructor() { }

  getProducts(): ProductModel[] {
      return this.products;
  }
}
