import { Injectable } from '@angular/core';
import { UserLoginInterface } from './user-login.interface';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() { }

  getUsers() {
    const users: UserLoginInterface[] = [
      {
        id: '1',
        firstName: 'Kevin',
        lastName: 'Smith',
      },
      {
        id: '2',
        firstName: 'John',
        lastName: 'Doe',
      },
      {
        id: '3 ',
        firstName: 'Sarah',
        lastName: 'Connor',
      }
    ];

    return users;
  }
}
