import { EventEmitter } from '@angular/core';
import { Item } from '../shared/item.model';


export class ShoppinglistService {
    itemsChanged = new EventEmitter<Item[]>();
  private items: Item[] = [
    new Item('Paddy', 5),
    new Item('Tomatoe Seeds', 10),
  ];

  getItems() {
    return this.items.slice();
  }

  addIngredient(item: Item) {
    this.items.push(item);
    this.itemsChanged.emit(this.items.slice());
  }

  addItems(items: Item[]) {
    
    this.items.push(...items);
    this.itemsChanged.emit(this.items.slice());
  }
}
