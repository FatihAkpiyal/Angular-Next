import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  template:`

  <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)" >
  <input type="text" name="name" placeholder="Name" ngModel> <br>
  <input type="text" name="surname" placeholder="Surname" ngModel> <br>
  <input type="email" name="email" placeholder="Email" ngModel> <br>
  <input type="tel" name="tel" placeholder="Tel" ngModel> <br>

  <div ngModelGroup="address" >

  <input type="text" name="country" placeholder="Country" ngModel> <br>
  <input type="text" name="city" placeholder="City" ngModel> <br>
  <input type="text" name="address" placeholder="Address" ngModel> <br>
  </div>

  <button> Send</button>

  </form>

  `,
})
export class AppComponent {
  @ViewChild("frm", {static:true}) frm:NgForm;

  title = 'template_driven_forms';
  onSubmit(data){
    console.log(`Value : ${this.frm.value}`);

    console.log(data)
  }
}
