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

    this.loading = true;

    this.servicios.getNewReleases()
      .subscribe((data:any) => {
      this.nuevasCanciones = data;
    });
    this.loading = false;
  }

  loading : boolean ;
}
