import {Component, OnInit} from '@angular/core';
import {AccountService} from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {

  accounts: { name: string, status: string }[] = [];

  constructor( private accountService: AccountService ) {
    this.accountService.emitter.subscribe(
      ( obj: { status: string, description: string } ) => {
        alert( obj.description + '\n with status ' + obj.status );
      }
    );
  }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
