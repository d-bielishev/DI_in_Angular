import {Component, Host} from '@angular/core';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-grand-child',
  template: `
    <div class="container">
      <h5>Grand-child component</h5>
      <div> Car model for Grand-Child component: <b> {{carService.getCar('BMW')}} </b></div>
    </div>
  `,
  styles: [
    `.container {
      background-color: chartreuse;
    }`
  ]
})
export class GrandChildComponent {
  constructor(public carService: CarService) { }
}
