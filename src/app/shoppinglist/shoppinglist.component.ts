import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';
import { ShoppinglistService } from './shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  items!: Item[];

  constructor(private slService: ShoppinglistService) { }

  ngOnInit() {
    this.items = this.slService.getItems();
    this.slService.itemsChanged
      .subscribe(
        (items: Item[]) => {
          this.items = items;
        }
      );
  }
}
