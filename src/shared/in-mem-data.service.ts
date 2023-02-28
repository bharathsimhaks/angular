import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class InMemDataService implements InMemoryDbService {

  
  constructor() { }
  createDb(reqInfo?: RequestInfo) {

     var productlist:product[]=[
      new product(1,"InMem Bluetooth headphones","Wireless BT",
    "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__480.jpg",
    5),
    new product(2,"InMem Bluetooth headphones","Wireless BT",
    "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__480.jpg",
    5,["Amazing","Nice"]),
    new product(3,"InMem Bluetooth headphones","Wireless BT",
    "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__480.jpg",
    5,["Amazing","Nice"]),
    new product(4,"InMem Bluetooth headphones","Wireless BT",
    "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__480.jpg",
    5,["Amazing","Nice"])
    ];
  
    return {products:productlist}  //api/products
  }

  genId(products:product[]):number{
    return products.length>0 ? Math.max(...products.map(prod=>prod.id))+1 
            : 1;
  }
}
