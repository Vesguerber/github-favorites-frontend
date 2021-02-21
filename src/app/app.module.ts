import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoCardComponent } from './repo-list/repo-card/repo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RepoListComponent,
    RepoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
