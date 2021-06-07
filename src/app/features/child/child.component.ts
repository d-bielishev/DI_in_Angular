import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h4>Child component</h4>
    <app-grand-child></app-grand-child>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
