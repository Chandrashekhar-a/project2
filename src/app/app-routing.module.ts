import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./product/products.component";
import { ProductstartComponent } from "./product/productstart/productstart.component";
import { ProducteditComponent } from "./product/productedit/productedit.component";
import { ProductdetailComponent } from "./product/productdetail/productdetail.component";
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";
import { NgModule } from "@angular/core";


const appRoutes : Routes = [
    {path: '',redirectTo: 'product', pathMatch: 'full' },
    {path: 'product', component: ProductComponent, children: [
        { path: '', component: ProductstartComponent },
        { path: 'new', component: ProducteditComponent },
        { path: ':id', component: ProductdetailComponent },
        { path: ':id/edit', component: ProducteditComponent },
  ] },
  { path:'shoppinglist',component: ShoppinglistComponent}
    
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}