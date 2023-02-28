import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/shared/product.model';

@Component({
  selector: 'app-productlistitem',
  templateUrl: './productlistitem.component.html',
  styleUrls: ['./productlistitem.component.css']
})
export class ProductlistitemComponent implements OnInit {

  @Input() productobj:product;

  constructor() { }

  ngOnInit(): void {
  }

}
