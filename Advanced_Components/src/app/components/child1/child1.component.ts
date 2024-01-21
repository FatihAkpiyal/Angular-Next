import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  template:`
  1- Child Component
  `,
  providers:[
    {provide:"ex", useValue:"merhaba"}
  ]
})
export class Child1Component {
  x(){
    console.log("Child 1 x Functions")
  }
}
