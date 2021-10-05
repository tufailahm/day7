import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productURL = "http://localhost:9090/product"

  //DI
  constructor(public httpClient:HttpClient) { }
  
  getProducts() :Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productURL)
  }
}
