/*
 * This file is copyright 2002-2020
 *
 * Halogen Software Inc. All rights reserved.
 * http://www.halogensoftware.com
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * is not permitted absent prior written approval from Halogen Software Inc.
 */

import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHightlight]',
})
export class BasicHightLightDirective implements OnInit{

  constructor( private element: ElementRef ) {

  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'green';
  }
}
