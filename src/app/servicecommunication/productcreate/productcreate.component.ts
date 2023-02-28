import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { ProductService } from 'src/shared/product.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  constructor(private productserviceref:ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  onAddNewProduct(productForm:NgForm){

    this.productserviceref.addProduct(productForm.value.title,productForm.value.description,productForm.value.imagepath,productForm.value.quantity)
    .subscribe((resp)=>{
      console.log(resp);
      this.productserviceref.productlistUpdated.next(true);
      productForm.reset();
      this.router.navigate(['']);
    })
  }
}
