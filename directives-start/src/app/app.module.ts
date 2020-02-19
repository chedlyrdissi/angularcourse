import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {BasicHightLightDirective} from './basic-highlights/basic-highlight.directive';
import { HighLightDirective2Directive } from './basic-highlights/high-light-directive2.directive';
import { UnlessDirective } from './basic-highlights/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightLightDirective,
    HighLightDirective2Directive,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
