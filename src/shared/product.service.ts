import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl:string="api/products";
  
  productlistUpdated=new Subject<boolean>();
  
  constructor(private http:HttpClient) { }

  getProductlist():Observable<product[]>
  {
    return this.http.get<product[]>(this.productsUrl);
  }

  addProduct(title:string,description:string,imagepath:string,quantity:number):Observable<product>
  {
    const newproduct={title:title,description:description,imagepath:imagepath,quantity:quantity};
    return this.http.post<product>(this.productsUrl,newproduct);
  }
}
