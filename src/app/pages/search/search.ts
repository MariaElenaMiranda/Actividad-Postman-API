import { Component, inject, output } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Subject, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ProductCard } from '../../shared/cards/product-card/product-card';

@Component({
  selector: 'app-search',
  imports: [AsyncPipe,ProductCard],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  private productService = inject(ProductService)
  private searchId$ = new Subject<number>()

  product$ = this.searchId$.pipe(
    switchMap(id => this.productService.getProductById(id))
  )

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value)
    console.log(value)

    if(value) {
      this.searchId$.next(value)
    }
  }
}
