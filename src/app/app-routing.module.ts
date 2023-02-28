import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscountedproductsComponent } from './servicecommunication/discountedproducts/discountedproducts.component';
import { ProductComponent } from './servicecommunication/product/product.component';
import { ProductcreateComponent } from './servicecommunication/productcreate/productcreate.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  },
  {
    path:'products',
    component:ProductComponent,
    children:[
      {
        path:'new',
        component:ProductcreateComponent  //products/new
      },
      {
        path:'edit/:id',
        component:ProductcreateComponent   //products/edit/:id
      }
    ]
  },
  {
    path:'discountedproducts',
    component:DiscountedproductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
