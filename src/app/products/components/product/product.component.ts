import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: ProductModel;

  constructor(private cartService: CartService){}

  onAddToCart(): void {
    this.cartService.addToCart(this.product);
    console.log('Product added to cart');
  }

}
