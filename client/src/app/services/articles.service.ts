import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {Article} from '../models/article';

@Injectable()
export class ArticlesService {
  articles: Article[];

  constructor(private Http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    // Todo: send the message _after_ fetching the heroes
    console.log(this.Http.get<Article[]>('http://localhost:3000/api/posts/all'));
    return this.Http.get<Article[]>('http://localhost:3000/api/posts/all');
  }
}
