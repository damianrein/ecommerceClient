import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
//import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

 // @Output()
  ownProducts:Product[] = [
    {id:1,nombre:"Auricular",description:"auriculares para computadora",precio: 22.55,url:"https://static.bidcom.com.ar/publicacionesML/productos/ABLUE109/1000x1000-ABLUE109.jpg"},
    {id:2,nombre:"Teclado",description:"teclado mecanico tamaño del 80%",precio: 35.85,url:"https://http2.mlstatic.com/D_NQ_NP_861690-MLA73209231353_122023-O.webp"},
    {id:3,nombre:"Notebook",description:"Notebook pantalla 19 pulgadas",precio: 1046.23,url:"https://bangho.vtexassets.com/arquivos/ids/161904/bgho_2024_l5_002.jpg?v=638690209287770000"},
    { id: 4, nombre: "Mouse", description: "mouse inalámbrico con sensor óptico", precio: 15.99, url: "https://http2.mlstatic.com/D_NQ_NP_868469-MLA45661631735_042021-O.webp" },
    { id: 5, nombre: "Altavoz", description: "altavoz Bluetooth portátil con batería recargable", precio: 49.99, url: "https://www.carlitoshogar.com.ar/adjuntos/800x800/carlitos/products/2024/07/245243.gif" },
    { id: 6, nombre: "Impresora", description: "impresora multifuncional con escáner y copiadora", precio: 129.99, url: "https://http2.mlstatic.com/D_NQ_NP_839137-MLA73209310185_122023-O.webp" },
    { id: 7, nombre: "Tableta", description: "tableta Android con pantalla táctil de 10 pulgadas", precio: 199.99, url: "https://http2.mlstatic.com/D_NQ_NP_693141-MLA43726355214_102021-O.webp" },
    { id: 8, nombre: "Cámara", description: "cámara digital con sensor de 16 megapíxeles y zoom óptico", precio: 79.99, url: "https://http2.mlstatic.com/D_NQ_NP_698356-MLA43726355235_102021-O.webp" },
    { id: 9, nombre: "Consola", description: "consola de juegos con controlador inalámbrico", precio: 299.99, url: "https://http2.mlstatic.com/D_NQ_NP_839138-MLA73209310186_122023-O.webp" }
  ];
  
  constructor() { }//private productsService: ProductsService

  ngOnInit(): void {
    this.pruductos();
  }

/**
 * 
 * @returns   loadProducts(){
    return this.productsService.getProducts().subscribe({
      next: (response)=>{
        this.products = response;
      }
    });
  }
 */

  pruductos(){
    return this.ownProducts;
    console.log(this.ownProducts);
  }
}
