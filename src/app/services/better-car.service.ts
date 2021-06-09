import { Injectable } from '@angular/core';

@Injectable()
export class BetterCarService {

  constructor() {
    console.log('BetterCarService created');
  }

  public getCar(car: string): string {
    return `Your car is ${car} from better service`;
  }

}
