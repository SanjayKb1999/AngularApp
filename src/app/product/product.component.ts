import { Component, OnInit } from '@angular/core';
import { IProduct } from '../prod';
import { Product } from '../Product';
import { ProductService } from '../product.service'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public prod !:IProduct [];
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.getProduct()
.subscribe(data => this.prod=data)
  }

}
