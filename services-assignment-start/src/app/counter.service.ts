import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {
  private counter = 0;

  userChanged() {
    this.counter++;
  }

  getCount() {
    return this.counter;
  }
}
