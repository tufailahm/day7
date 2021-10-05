import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products !: Product [] 
  constructor() 
  {
    this.products = [
      { "productId": 199, "productName": "Laptop" , "quantityOnHand": 89, "price": 12},
      { "productId": 200, "productName": "Mouse" , "quantityOnHand": 100, "price": 8779},
      { "productId": 201, "productName": "Printer" , "quantityOnHand": 122,"price": 877}
    ]
   }

  ngOnInit(): void {
  }

}
