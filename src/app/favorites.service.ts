import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorites } from './favorites';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {

  private readonly API = 'https://localhost:44314/api/favorite/';
  private readonly APIGit = 'https://api.github.com/repositories/';
  favorites: Favorites[];
  public isFav;
  repos: Repo[] = new Array<Repo>();

  constructor(private http: HttpClient) { }

  list() {
    var favorites: Favorites[];
    this.http.get<Favorites[]>(this.API).subscribe((value) => {
      this.favorites = value
      this.favorites.map((fav) => {
        var repoAux: Repo;
        this.http.get<Repo>(this.APIGit + fav.repoId).subscribe((value) => {
          repoAux = value;
          this.repos.push(repoAux)
        });
      });
    });
    return this.repos;
  }

  
}
