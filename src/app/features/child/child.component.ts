import {Component} from '@angular/core';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-child',
  template: `
    <div class="container">
      <h4>Child component</h4>
      <div>Car model for Child component: <b> {{carService?.getCar('Audi')}} </b></div>
      <app-grand-child></app-grand-child>
    </div>
  `,
  styles: [
    `.container {
      background-color: bisque;
    }`
  ]
})
export class ChildComponent {
  constructor(public carService: CarService) { }

}
