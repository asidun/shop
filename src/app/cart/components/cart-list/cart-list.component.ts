import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent{
  @Input() items!: ProductModel[];

  constructor(private cartService: CartService){}

  trackById(index: number, item: ProductModel): number{
    return item.id;
  }

}
