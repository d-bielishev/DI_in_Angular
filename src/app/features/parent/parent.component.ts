import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-parent',
  template: `
    <div class="container">
      <h3>Parent component</h3>
<!--      <app-child></app-child>-->
      <hr>
      <h6>Child in content</h6>
      <ng-content></ng-content>
    </div>
  `,
  providers: [CarService],
  styles: [
    `.container {
      background-color: aqua;
    }`
  ]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
