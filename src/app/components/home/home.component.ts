import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  loadProducts(){
    return this.productsService.getProducts().subscribe({
      next: (response)=>{
        this.products = response;
      }
    });
  }
}
