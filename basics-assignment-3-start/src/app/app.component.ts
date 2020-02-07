// @ts-ignore
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isHidden = true;
  public clicks = [];
  onButtonClick(): void {
    this.isHidden = !this.isHidden;
    this.clicks.push( new Date().toTimeString() );
  }
  getIsHidden(): boolean {
    return this.isHidden;
  }
  isChangeEffect(i): boolean {
    return this.clicks.indexOf(i) > 3;
  }
  getClass(i) {
    return this.isChangeEffect(i) ? 'white' : '';
  }
  getStyle(i) {
    return this.isChangeEffect(i) ? 'background-color: blue;' : '';
  }
  getColor(i) {
    return this.isChangeEffect(i) ? 'blue' : '';
  }
}
