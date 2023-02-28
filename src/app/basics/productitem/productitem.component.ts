import { Component, OnInit } from '@angular/core';
import { product } from 'src/shared/product.model';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {


  productobj:product=new product(1,"Bluetooth headphones","Wireless BT",
  "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__480.jpg",
  5,["Amazing","Nice"]);


  constructor() { }

  ngOnInit(): void {
  }

}
