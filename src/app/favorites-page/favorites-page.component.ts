import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Repo } from '../repo';


@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  
  repos: Repo[] = new Array<Repo>();
  stringFav: string;

  constructor(private service: FavoritesService) { }

  ngOnInit(): void {
    this.repos = this.service.list();
  }

}
