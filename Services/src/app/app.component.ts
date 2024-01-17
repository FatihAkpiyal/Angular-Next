import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { ReadUserComponent } from "./components/read-user/read-user.component";

//FormsModule import 

@Component({
    selector: 'app-root',
    standalone: true,
    template: `

<app-create-user></app-create-user>
<hr>
<app-read-user></app-read-user>
  
  `,
    imports: [CommonModule, RouterOutlet, CreateUserComponent, ReadUserComponent]
})
export class AppComponent {
  title = 'Services';
}
