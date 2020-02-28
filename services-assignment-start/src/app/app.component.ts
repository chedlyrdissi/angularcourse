import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private userService: UsersService ) {}

  ngOnInit(): void {
  }

  getCount() {
    return this.userService.getCount();
  }
}
