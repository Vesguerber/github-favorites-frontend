import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FavoritesService } from '../favorites.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  isFav:string;

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: Repo,
    private service: FavoritesService
  ) 
  {

  }

  ngOnInit(): void {
    this.isFav = "fa-star fas";
    this.isFav = "far fa-star";
        
  }

}
