import { Repo } from '../repo';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { FavoritesService } from '../favorites.service';
import { Favorites } from '../favorites';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  @Input() reposits: Repo[] = new Array<Repo>();
  @Input() ocultaTitulo: boolean = false;


  constructor(public dialog: MatDialog) { 
    

  }

  ngOnInit(): void {
    
  }

  onCardClicked(item: Repo) {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reposits[this.reposits.indexOf(item)] = result;
      }
    })
  }


}

export interface UpdateEvent {
  old: Repo,
  new: Repo,
}