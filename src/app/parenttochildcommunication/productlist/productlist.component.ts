import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/shared/product.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  @Input() productlist:product[];

  constructor() { }

  ngOnInit(): void {
  }

}
