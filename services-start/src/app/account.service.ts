import {EventEmitter, OnInit} from '@angular/core';

export class AccountService implements OnInit {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  emitter: EventEmitter< {status: string, description: string} > = new EventEmitter< {status: string, description: string} >();

  ngOnInit(): void {
  }

  addAccount( name: string, status: string ) {
    this.accounts.push({name: name, status: status});
    this.emitter.emit({status: status, description: 'adding account'});
  }

  updateStatus( id: number, newStatus: string ) {
    this.accounts[id].status = newStatus;
    this.emitter.emit({status: status, description: 'updating account'});
  }

}
