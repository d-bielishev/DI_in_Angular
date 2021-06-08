import {Component, Host, Optional, Self} from '@angular/core';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-child',
  template: `
    <div class="container">
      <h4>Child component</h4>
      <div>Car model for Child component: <b> {{carService?.getCar('Audi')}} </b></div>
    </div>
  `,
  styles: [
    `.container {
      background-color: bisque;
    }`
  ]
})
export class ChildComponent {
  constructor(@Self() @Optional() public carService: CarService) { }

}
