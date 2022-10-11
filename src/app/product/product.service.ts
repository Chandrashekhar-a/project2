import { EventEmitter, Injectable } from '@angular/core';
import { Item } from '../shared/item.model';
import { ShoppinglistService } from '../shoppinglist/shoppinglist.service';
import { product } from './product.model';

@Injectable()
export class ProductService {
  productSelected = new EventEmitter<product>();

  private  products:  product[] = [
    new product(
          ' Black Gram',
          'A Varient Black Gram - TBG 104!',
          'https://www.agrifarming.in/wp-content/uploads/2015/04/Black-Gram-Production..jpg',
      [
        new Item('Black Gram Seed', 1)
       
      ]),
      new product('Red Gram',
          'A Varient Red Gram - LRG-42?',
          'https://www.agrifarming.in/wp-content/uploads/2019/10/Comp1-19.jpg',
      [
        new Item('Red Gram seed', 2)
        
      ])
  ];
  constructor(private slService: ShoppinglistService) {}
  getProducts() {
    return this.products.slice();
  }
  getProduct(index: number) {
    return this.products[index];
  }
  addItemToShoppingList(items: Item[]) {
    this.slService.addItems(items);
  }
}
