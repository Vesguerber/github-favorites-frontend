import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  repos: Repo[] = new Array<Repo>();



  constructor() { }

  ngOnInit(): void {
  }

  getRepos(items: Repo[]) {
    this.repos = items;
  }

}
