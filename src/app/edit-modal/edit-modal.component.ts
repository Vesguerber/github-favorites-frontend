import { Component, Input, OnInit } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  @Input() item: Repo;

  constructor() { }

  ngOnInit(): void {
  }

}
