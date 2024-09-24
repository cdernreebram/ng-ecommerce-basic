import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { CommonModule } from '@angular/common';
import { product } from '../product-view/productmodal';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent  implements OnInit{
  showproduct:any=[];
  public totalamout :number=0;
  orderCompleted: boolean = false;
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.showproduct = res; 
      this.totalamout = this.api.calculateprice();
      
    })
  }

  deleteitem(item:product){
    this.api.removecartitem(item)
  }

  checkoutproduct(){
    if (this.showproduct.length === 0) {
      this.orderCompleted = false;
      alert("Order Failed: No items in the cart");
    } else {
      this.orderCompleted = true;
      this.api.checkout();
      this.totalamout = 0;
    }
    
  }
}
