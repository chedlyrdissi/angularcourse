import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  private btnDisabled = true;
  private textShown = 'button has not been clicked';
  private textToShow = 'button has been clicked';
  private text = this.textShown;
  private originalTitle = document.title;
  private onHoverTitle = 'Hovered';
  private count: number;
  private countActivated = false;
  private interval;
  private list = [];
  j: number;
  getBtnDisbaled(): boolean {
    return this.btnDisabled;
  }
  onMouseEnter(): void {
    this.count = 0;
    this.j = 0;
    document.title = this.onHoverTitle;
    this.countActivated = true;
    this.interval = setInterval(function() {
      this.count++;
    }, 100);
  }
  onMouseOver(): void {
  }
  onMouseLeave(): void {
    document.title = this.originalTitle;
    this.countActivated = false;
    clearInterval( this.interval );
  }
  btnClicked(): void {
    this.list.push( this.j++ );
  }
  getText() {
    return this.text;
  }
  changeText() {
    if ( this.text === this.textToShow ) {
      this.text = this.textShown;
      this.btnDisabled = true;
      this.count = 0;
    } else if ( this.text === this.textShown ) {
      this.text = this.textToShow;
      this.btnDisabled = false;
    }
  }
}
