import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/products.component';
import { ProductdetailComponent } from './product/productdetail/productdetail.component';
import { ProducteditComponent } from './product/productedit/productedit.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductitemComponent } from './product/productlist/productitem/productitem.component';
import { ProductstartComponent } from './product/productstart/productstart.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductdetailComponent,
    ProducteditComponent,
    ProductlistComponent,
    ProductitemComponent,
    ProductstartComponent,
    ShoppinglistComponent,
    ShoppingeditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppinglistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
