import { Component, OnInit } from '@angular/core';
import { product } from 'src/shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  storedProducts:product[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  onNewProductRecvdHandler(newproduct:product)
  {
       this.storedProducts.push(newproduct);
       console.log(this.storedProducts);
  }
}
