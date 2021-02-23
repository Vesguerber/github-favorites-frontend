import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Repo } from 'src/app/repo';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {

  @Input() item: Repo;

  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onCardClick() {
    this.cardClick.emit();
  }

}
