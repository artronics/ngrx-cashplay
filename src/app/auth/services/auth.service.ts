import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { User } from '../models/user';
import { Authenticate } from '../models/authenticate';

@Injectable()
export class AuthService {
  constructor() {}

  login({ email , password }: Authenticate) {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (email !== 'test') {
      return _throw('Invalid username or password');
    }

    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
