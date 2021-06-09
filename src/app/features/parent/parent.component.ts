import { Component } from '@angular/core';
import {BetterCarService} from '../../services/better-car.service';

@Component({
  selector: 'app-parent',
  template: `
    <div class="container">
      <h3>Parent component</h3>
      <app-child></app-child>
      <hr>
    </div>
  `,
  providers: [BetterCarService],
  styles: [
    `.container {
      background-color: aqua;
    }`
  ]
})
export class ParentComponent {}
