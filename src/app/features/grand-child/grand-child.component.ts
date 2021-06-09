import {Component} from '@angular/core';
import {CarService} from '../../services/car.service';
import {BetterCarService} from '../../services/better-car.service';

@Component({
  selector: 'app-grand-child',
  template: `
    <div class="container">
      <h5>Grand-child component</h5>
      <div> Car model for Grand-Child component: <b> {{carService.getCar('BMW')}} </b></div>
    </div>
  `,
  providers: [
    { provide: CarService,
      useFactory: (betterCar: BetterCarService) => ({
        getCar(car: string): string {
          return `${betterCar.getCar('VAZ')} instead of ${car} FROM FACTORY`;
        }
      }),
      deps: [BetterCarService],
    }
  ],
  styles: [
    `.container {
      background-color: chartreuse;
    }`
  ]
})
export class GrandChildComponent {
  constructor(public carService: CarService) { }
}
