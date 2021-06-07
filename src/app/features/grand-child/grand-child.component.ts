import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  template: `
    <h5>Grand-child component</h5>
  `,
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
