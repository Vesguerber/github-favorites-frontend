import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private readonly API = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  list (user) {
    return this.http.get<Repo[]>(this.API+user+'/repos');
  }

}
