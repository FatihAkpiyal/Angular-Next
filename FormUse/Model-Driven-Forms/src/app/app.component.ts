import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],

  template:`
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">
    <input type="text" placeholder="Name" formControlName="name"> <br>
    <input type="text" placeholder="Surname" formControlName="surName"> <br>
    <input type="email" placeholder="Email" formControlName="email"> <br>
    <input type="tel" placeholder="tel" formControlName="tel"> <br>
    <div formGroupName="Address">
      <input type="text" placeholder="Country" formControlName="country"> <br>
      <input type="text" placeholder="City" formControlName="city"> <br>
      <input type="text" placeholder="Address" formControlName="address"> <br>

    </div>

    <button> Send </button>

  </form>
  
  `,
  
})
export class AppComponent {
  frm:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.frm = formBuilder.group({
      name:[""],
      surName:[""],
      email:[""],
      tel:[""],
      Address: formBuilder.group({
        country:[""],
        city:[""],
        address:[""]
      })
    })

    this.frm.valueChanges.subscribe({
      next:data=>{
        console.log(data);
      }
    })
    
  }
  onSubmit(){
    console.log(this.frm.value)
  }

}
