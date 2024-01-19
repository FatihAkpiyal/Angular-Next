import { Component } from '@angular/core';
import { Standalone2Component } from '../standalone2/standalone2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [Standalone2Component,FormsModule],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.scss',
})
export class StandaloneComponent {
  data:any;
}
