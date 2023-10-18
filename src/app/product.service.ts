import { Injectable } from '@angular/core';

 

import * as products from './models/product';

 

import { HttpClient } from '@angular/common/http';

 

import { Observable } from 'rxjs';

 

 

 

 

 

 

 

@Injectable({

 

  providedIn: 'root'

 

})

 

export class ProductService {

 

 

 

  products : products.Product[] = [];

 

  baseUrl: string = "http://localhost:3000/products";

 

 

 

  constructor(private http: HttpClient) {

 

   

 

  }

 

 

 

  getProducts(): Observable<products.Product[]>{

 

 

 

    return this.http.get<products.Product[]>(this.baseUrl);

 

   

 

  }

 

 

 

  save(product: products.Product): Observable<products.Product>{

 

    return this.http.post<products.Product>(this.baseUrl, product);

 

  }

 

   delete(product: products.Product):Observable<void> {

 

let url = `${this.baseUrl}/${product.id}`;

 

    return this.http.delete<void>(url);

 

   }

 

 

 

}

 

 