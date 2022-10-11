import { Item } from '../shared/item.model';

export class product{
  [x: string]: any;
  public name: string;
  public description: string;
  public imagePath: string;
  public items: Item[];

  constructor(name: string, desc: string, imagePath: string, items: Item[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.items = items;
  }
}
