import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/shared/product.model';
import { ProductService } from 'src/shared/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist:product[];
  constructor(private productserviceref:ProductService,private router:Router,private route:ActivatedRoute) { }

  onAddNewProductClick()
  {
      this.router.navigate(['new'],{relativeTo:this.route})
  }

  ngOnInit(): void {
   this.productserviceref.getProductlist().subscribe(
    (productlistdata:product[])=>{
      this.productlist=productlistdata;
    })

    this.productserviceref.productlistUpdated.subscribe(
      (data:boolean)=>{
        if(data)
        {
          this.productserviceref.getProductlist().subscribe(
            (updatedproductlistdata:product[])=>{
              this.productlist=updatedproductlistdata;
            })
        }
      }
    )
  }

}
