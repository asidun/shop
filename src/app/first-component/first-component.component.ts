import { Component } from '@angular/core';
import { Category } from './category.enum';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'TV Samsung';
  description: string = 'This is gool TV';
  price: number = 99.99;
  category: Category = Category.Electronics;
  isAvailable: boolean = true;

}
