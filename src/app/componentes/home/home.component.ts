import { Component, OnInit } from '@angular/core';
import {SpotifyservicesService} from "../../servicios/spotifyservices.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nuevasCanciones:any[] = [];

  constructor(private servicios: SpotifyservicesService) {
    this.servicios.getNewReleases()
      .subscribe((data:any) => {
      console.log(data);
      this.nuevasCanciones = data.albums.items;
    });
  }
}
