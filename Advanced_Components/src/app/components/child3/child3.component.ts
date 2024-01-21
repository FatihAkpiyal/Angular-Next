import { Component } from '@angular/core';

@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [],
  template:`
  3- Child Component
  `,
  providers:[
    {provide:"ex", useValue:true}
  ]
})
export class Child3Component {

}
