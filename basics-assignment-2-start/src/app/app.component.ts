import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private username: String;
  private btnDisabled = true;
  textEntered(event: any) {
    if ( event.data == null) {
      this.btnDisabled = true;
    } else {
      this.btnDisabled = false;
    }
  }
  reset() {
    this.username = '';
    this.btnDisabled = true;
  }
}
