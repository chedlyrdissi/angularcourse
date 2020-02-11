import {
  Component,
  EventEmitter,
  Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  private interval;
  @Output() startEvent = new EventEmitter<{ num: number }>();
  private gameNum: number;

  constructor() {
    this.gameNum = 0;
  }

   start() {
     if (this.interval === undefined) {
       this.interval = setInterval(() => {
         this.emitEvent();
       }, 1000);
     }
     // this.emitEvent();
  }

  stop() {
    clearInterval(this.interval);
    this.interval = undefined;
  }

  emitEvent() {
      if ( this.startEvent === undefined ) {
        this.startEvent = new EventEmitter<{ num: number }>();
      }
      this.startEvent.emit({ num: this.gameNum++ } );
      console.log( this.startEvent );
  }

}
