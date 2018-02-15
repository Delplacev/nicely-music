import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Musique } from '../models/musique';

@Injectable()
export class MusiquesService {
  musiques: Musique[];


  constructor(private Http: HttpClient) { }

  getMusiques(): Observable<Musique[]> {
    // Todo: send the message _after_ fetching the heroes
    console.log(this.Http.get<Musique[]>('http://localhost:3000/api/musiques/all'));
    return this.Http.get<Musique[]>('http://localhost:3000/api/musiques/all', {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
    });
  }

}
