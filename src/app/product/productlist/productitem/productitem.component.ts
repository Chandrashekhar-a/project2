import { Component, Input, OnInit } from '@angular/core';
import { product } from '../../product.model';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  
    @Input() product!: product;
    @Input() index!: number;
  
    ngOnInit() {
    }
  }
  