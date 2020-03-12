import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

  imgLink = 'https://p7.hiclipart.com/preview/523/585/190/smiley-emoticon-sadness-clip-art-smiley-sad-face-png.jpg';
  alt = ':\'(';

  constructor( private router: Router) {}

  onClick() {
    this.router.navigate(['/']);
  }
}
