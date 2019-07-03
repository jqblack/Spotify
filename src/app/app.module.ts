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
import { NoImagePipe } from './pipe/no-image.pipe';
import { TarjetasComponent } from './componentes/shared/tarjetas/tarjetas.component';
import { LoadingComponent } from './componentes/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoImagePipe,
    TarjetasComponent,
    LoadingComponent
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
