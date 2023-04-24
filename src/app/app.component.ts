import { Component } from '@angular/core';
import { ProductModel } from './products/models/product.model';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  // Обычно тут используют интерфейс, который расширяет ProductMode, так как в корзине, обычно,
  // еще указывают количество, его увеличивают или уменьшают, иногда хранят и сумму.
  cartItems: ProductModel[] = [];

  constructor(private cartService: CartService){
    this.cartItems = this.cartService.getItems();
  }
}
