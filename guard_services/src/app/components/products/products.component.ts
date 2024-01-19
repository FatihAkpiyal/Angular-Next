import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgFor,RouterLink,HttpClientModule],
  template:`
  Products <br>

  <router-outlet></router-outlet>

  <br>
  <ul>
    <li *ngFor="let photo of photos" >
    <a [routerLink]="[photo.id]">{{photo.url}} </a>
  </li>
  </ul>
  `,
  
})
export class ProductsComponent implements OnInit {
  //constructor(private httpClient:HttpClient){ }
  constructor(private activatedRoute:ActivatedRoute){ }
  
  
  photos;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data:any) => this.photos = data["photos"]);
    
  }
}

