import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsResponse } from '../models/products-response.model';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient)
  private apiUrl = 'https://dummyjson.com/products';

  getProducts() : Observable<Product[]> {
    return this.http.get<ProductsResponse>(this.apiUrl).pipe(
      map(res => res.products)
    );
  }


}
