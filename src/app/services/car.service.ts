import { Injectable } from '@angular/core';

@Injectable()
export class CarService {
  constructor() { }

  public getCar(car: string): string {
    return `Your car is ${car}`;
  }
}
