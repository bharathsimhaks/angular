import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/shared/product.model';

@Component({
  selector: 'app-productlistitem',
  templateUrl: './productlistitem.component.html',
  styleUrls: ['./productlistitem.component.css']
})
export class ProductlistitemComponent implements OnInit {

  @Input() productobj:product;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onEdit()
  {
      this.router.navigate(['edit',this.productobj.id],{relativeTo:this.route});
  }

}
