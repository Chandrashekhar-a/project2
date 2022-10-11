import { Component, OnInit } from '@angular/core';
import { product} from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  selectedProduct!: product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.productSelected
      .subscribe(
        (products: product) => {
          this.selectedProduct = products;
        }
      );
  }

}
