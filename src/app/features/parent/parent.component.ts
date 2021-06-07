import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h3>Parent component</h3>
    <app-child></app-child>
  `,
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
