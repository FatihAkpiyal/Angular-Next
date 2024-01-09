import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  template:`
  Example
  `,
})
export class ExampleComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,
AfterContentChecked {
  ngAfterContentChecked(): void {
    console.log("5. ngAfterContentInit")
  }
  
  ngAfterContentInit(): void {
    console.log("4. ngAfterContentInit")
  }
  ngDoCheck(): void {
    console.log("3. ngDoCheck")
  }
  ngOnInit(): void {
    console.log("2. ngOnInit")
  }

  @Input() data:string="321321";

  ngOnChanges(changes: SimpleChanges): void {
    console.log("1. ngOnChanges")
  }


}
