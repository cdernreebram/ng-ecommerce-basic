import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { product } from '../product-view/productmodal';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productdata:any|product;

  constructor(private api:ApiService,private activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    let productid = this.activatedroute.snapshot.paramMap.get('productid');
    // console.log('ID',productid)
    productid && this.api.getproductbyid(productid).subscribe((res)=>{
      this.productdata = res;

    })
  }
  addtocart(productdata:product){

    this.api.addtocart(productdata);
  }
 

}
