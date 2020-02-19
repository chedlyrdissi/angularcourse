import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {

  @HostBinding('class.open') show = false;

  constructor( private element: ElementRef, private renderer: Renderer2 ) {}

  ngOnInit(): void {
  }

  @HostListener('click') toggleShow() {
    this.show = !this.show;
  }
}
