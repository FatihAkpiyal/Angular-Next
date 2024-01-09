import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from "./components/example/example.component";



@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-example data="Merhaba"> fsafsadasfas </app-example>
    <ng-content> </ng-content>
    <input type="data">
    `,
    imports: [CommonModule, RouterOutlet, ExampleComponent]
})
export class AppComponent {
  title = 'Parent-to-Child';
}
