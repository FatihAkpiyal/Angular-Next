import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StandaloneComponent } from './components/standalone/standalone.component';
import { Standalone2Component } from './components/standalone2/standalone2.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,StandaloneComponent,Standalone2Component,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'STANDALONE-COMPONENTS';
}
