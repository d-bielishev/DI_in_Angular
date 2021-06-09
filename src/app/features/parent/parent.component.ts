import { Component } from '@angular/core';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-parent',
  template: `
    <div class="container">
      <h3>Parent component</h3>
      <app-child></app-child>
      <hr>
    </div>
  `,
  providers: [CarService],
  styles: [
    `.container {
      background-color: aqua;
    }`
  ]
})
export class ParentComponent {}
