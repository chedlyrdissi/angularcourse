// @ts-ignore
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  numbers: number[] = [];

  gameEvent( event: { num: number } ) {
    console.log('calling game event');
    this.numbers.push(event.num);
  }
}
