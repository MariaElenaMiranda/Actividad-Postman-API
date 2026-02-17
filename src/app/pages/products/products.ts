import { Component, inject } from '@angular/core';
import { ProductCard } from "../../shared/cards/product-card/product-card";
import { ProductService } from '../../core/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ProductCard, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private productService = inject(ProductService)
  products$ = this.productService.getProducts()

}
