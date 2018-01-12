import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { DetailsComponent } from './details/details.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { ShowDetailsComponent } from './show-details/show-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SeasonsComponent,
    DetailsComponent,
    EpisodeDetailsComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
