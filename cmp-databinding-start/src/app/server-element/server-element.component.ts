import {
  Component, ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  // tslint:disable-next-line:no-input-rename
  @Input('srvElem') serverElement: { type: string, name: string, content: string };
  @ViewChild('header', {static: true}) header: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

}
