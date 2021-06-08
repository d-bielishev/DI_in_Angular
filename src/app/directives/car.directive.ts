import { Directive } from '@angular/core';
import {CarService} from '../services/car.service';

@Directive({
  selector: '[appCar]',
  providers: [CarService],
})
export class CarDirective {

  constructor() { }

}
