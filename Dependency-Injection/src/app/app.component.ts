import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Product, ProductService } from './productservice';
//import { LogService } from './productservice';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  
  
  `,
  providers: [//LogService, 
  ProductService,
  {
      provide:"productService", useFactory:(httpClient:HttpClient) => {
        
        const obs = httpClient.get("https://jsonplaceholder.typicode.com/posts").
        subscribe({next:data=>console.log(data)});
        return new ProductService();
        },deps:[HttpClient]
      }
      
  ],
})

export class AppComponent {
  constructor(@Inject("productService")private productService:ProductService) {
    console.log(productService.getProducts());
   //private productService: ProductService) {
    //console.log(productService.getProducts())

  }
}

