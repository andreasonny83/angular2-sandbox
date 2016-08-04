import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
    <h1>{{ myModel }}</h1>
  `
})
export class MyComponent {
  @Input()
  myModel;

  @Output()
  myModelChange = new EventEmitter();

  ngOnInit() {
    console.log('i am ready');

    // this.myModel.subscribe(function() {
      // console.log('i am ready');
    // })
  }
}
