import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,RouterOutlet],
  template:`
  <a routerLink="home" routerLinkActive="active"> Home  </a> |
  <a routerLink="about" routerLinkActive="active" > About</a> |
  <a routerLink="contact" routerLinkActive="active" >Contact</a> 
  <hr>
  <router-outlet></router-outlet>
  `,
  styles:[".active{ color:red;}"]
})
export class AppComponent {
  title = 'Routing';
}
