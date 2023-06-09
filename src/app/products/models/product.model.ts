import { Category } from "../../first-component/category.enum";

export interface ProductModel {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
  }
  
  export class Product implements ProductModel {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public price: number,
      public category: Category,
      public isAvailable: boolean
    ) {}
  }
  