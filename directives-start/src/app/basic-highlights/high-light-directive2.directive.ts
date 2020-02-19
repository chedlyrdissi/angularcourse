import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighLightDirective2]'
})
export class HighLightDirective2Directive implements OnInit {

  @HostBinding('style.backgroundColor') bg: String = 'lightblue';

  constructor( private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'lightblue');
    this.bg = 'lightblue';
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'palevioletred');
    this.bg = 'palevioletred';
    this.renderer.setStyle(this.elem.nativeElement, 'color', 'orange');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ngOnInit();
  }
}
