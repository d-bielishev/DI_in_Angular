import { Injectable } from '@angular/core';

@Injectable()
export class CarService {
  constructor() {
    console.log('CarService created');
  }

  public getCar(car: string): string {
    return `Your car is ${car}`;
  }
}
