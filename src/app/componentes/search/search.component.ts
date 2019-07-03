import { Component, OnInit } from '@angular/core';
import {SpotifyservicesService} from "../../servicios/spotifyservices.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private spotify: SpotifyservicesService) { }

  ngOnInit() {
  }

  artistas :any[] = [];
  loading : boolean;

  BuscarArt(termino:String){
    this.loading = true;
   this.spotify.getArtistas(termino)
    .subscribe((data:any) =>{
      this.artistas = data;
      this.loading = false;
    });
  }
}
