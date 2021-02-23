import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoCardComponent } from './repo-list/repo-card/repo-card.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RepoListComponent,
    RepoCardComponent,
    SearchFormComponent,
    EditModalComponent,
    FavoritesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EditModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
