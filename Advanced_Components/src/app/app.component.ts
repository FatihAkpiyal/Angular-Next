import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,Child1Component,Child2Component,Child3Component],
  template: `

    <h1 #h>App Component</h1>
    <br>  
    <app-child1 #h > </app-child1> <br>
    <app-child2 #h></app-child2> <br>
    <app-child3 #h></app-child3>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  @ViewChild("h") h= ElementRef;
  @ViewChild(Child1Component, {static:true}) child1Component:Child1Component;
  @ViewChild(Child1Component, {static:true}) _child1Component:Child1Component;
  @ViewChild(Child1Component,{static:true,read:"ex"} ) ex : string;
  @ViewChildren("h",{read: "ex"} ) _list: QueryList<string|number|boolean>;
  

  ngOnInit(){
    console.log(this.child1Component + "ngOnInit")
    console.log(this.ex)
  }

  ngAfterViewInit(){
    console.log(this.h)
    console.log(this.child1Component + "ngAfterViewInit" )
    console.log(this._list)
  }

}
