import { Injectable } from '@angular/core';
import {User} from '../models';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService {
  user: User;

  constructor(private Http: HttpClient) { }

  getProfile(): Observable<User> {
    // Todo: send the message _after_ fetching the heroes
    console.log(this.Http.get<User>('http://localhost:3000/auth/me'));
    return this.Http.get<User>('http://localhost:3000/auth/me');
  }
}
