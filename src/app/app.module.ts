import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';

//IMPORTAMOS LAS RUTAS AQUI
import{APP_ROUTING} from "./app.routes";
import {SpotifyservicesService} from "./servicios/spotifyservices.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
   SpotifyservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
