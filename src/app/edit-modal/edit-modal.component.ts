import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    private service: FavoritesService,
    private router: Router
  ) 
  {

  }

  onStarClick(id){
    this.service.insertFav(id);
    setTimeout(function () {window.location.href = "/favorites";}, 1000);

  }

  ngOnInit(): void {
        
  }

}
