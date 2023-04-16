import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  items: ProductModel[] = [];

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  trackById(index: number, item: ProductModel): number{
    return item.id;
  }

}
