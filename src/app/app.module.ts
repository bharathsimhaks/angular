import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './basics/test/test.component';
import { ProductitemComponent } from './basics/productitem/productitem.component';

import { FormsModule } from '@angular/forms';
import { ProductComponent } from './servicecommunication/product/product.component';
import { ProductlistComponent } from './servicecommunication/productlist/productlist.component';
import { ProductlistitemComponent } from './servicecommunication/productlistitem/productlistitem.component';
import { InMemDataService } from 'src/shared/in-mem-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ProductcreateComponent } from './servicecommunication/productcreate/productcreate.component';
import { HeaderComponent } from './servicecommunication/header/header.component';
import { DiscountedproductsComponent } from './servicecommunication/discountedproducts/discountedproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ProductitemComponent,
    ProductComponent,
    ProductlistComponent,
    ProductlistitemComponent,
    ProductcreateComponent,
    HeaderComponent,
    DiscountedproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemDataService,{dataEncapsulation:false}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
