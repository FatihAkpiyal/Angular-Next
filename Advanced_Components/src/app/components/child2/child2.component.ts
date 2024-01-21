import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  template:`
  2- Child Component
  `,
  providers:[
    {provide:"ex", useValue:3}
  ]
})
export class Child2Component {

}
