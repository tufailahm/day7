import { Component, OnInit } from '@angular/core';
import { ProductData } from '../data/ProductData';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products !: Product[]

  constructor(public productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data => {
      this.products = data
    }))
  }

}
