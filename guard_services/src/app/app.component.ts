import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule,RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,HttpClientModule],
  template:`
    <a routerLink="home" >Home</a> |
    <a routerLink="about" >About</a> |
    <a routerLink="products" >Products</a> | <br>

    <router-outlet></router-outlet>
  
  `,
  
})
export class AppComponent {
  title = 'guard_services';
}
