import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from 'src/shared/product.model';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

 

  @Output() productaddevent=new EventEmitter<product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewProduct(productForm:NgForm){
    const newproduct=new product(191,productForm.value.title,productForm.value.description,productForm.value.imagepath,productForm.value.quantity);
    console.log(newproduct);
    this.productaddevent.emit(newproduct);
    productForm.reset();

  }

}
