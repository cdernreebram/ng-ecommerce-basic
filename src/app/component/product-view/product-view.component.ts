import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { product } from './productmodal';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {
  data!: any | product[]

  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.displayproducts();
  }
  displayproducts() {
    this.api.getproduct().subscribe(res => {
      this.data = res;
      console.log(res)
    })
  }
  addtocart(item: product) {
    this.api.addtocart(item);
  }
}
