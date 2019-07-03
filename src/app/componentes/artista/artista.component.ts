import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyservicesService} from "../../servicios/spotifyservices.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  constructor(private activateRouter:ActivatedRoute,
              private spotifyservice:SpotifyservicesService) {
    this.load = true;
    this.activateRouter.params.subscribe(data =>{
      this.getArtista(data["id"]);
    });

  }

  ngOnInit() {
  }

  artista : any = {};
  load : boolean;

  getArtista(id:String){
    this.spotifyservice.getArtista(id)
      .subscribe(data =>{
        this.artista = data;
        this.load = false;
      });
  }

}
