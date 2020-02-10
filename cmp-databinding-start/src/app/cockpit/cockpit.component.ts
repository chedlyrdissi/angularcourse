import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit-component',
  templateUrl: './cockpit.component.html',
  styleUrls: [ './cockpit.component.css' ],
})

export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();

  @ViewChild('ServerName') elementName: ElementRef;

  onAddServer( input: HTMLInputElement ) {
    this.serverCreated.emit({ name: this.elementName.nativeElement.value, content: input.value });
  }

  onAddBlueprint( input: HTMLInputElement ) {
    this.blueprintCreated.emit({ name: this.elementName.nativeElement.value, content: input.value });
  }

}
