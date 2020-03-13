import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';
import { Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn = false;

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  isAuthenticated() {
    const promise = new Promise(
      ( resolve, reject ) => {
        setTimeout( () => { resolve( this.loggedIn ); } , 800);
      }
    );
    return promise;
  }

}
