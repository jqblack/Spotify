import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyservicesService {

  constructor(private http:HttpClient) {
    console.log("Listo para usar los servicios")
  }

  getQuery(query :String){
    const url = "https://api.spotify.com/v1/"+query;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDwbBH69OnZ1cu_o6QWq4qfUKy6OGsPfSkXQrSPxntwUX58EBEsmYi3l1NhRIFSkBx_29XUPu3NifUvGP8'
    });

    return this.http.get(url,{headers});
  }

  getNewReleases(){

    return this.getQuery("browse/new-releases").pipe(map( data => data["albums"].items));
  }

  getArtistas(termino : String){
    return this.getQuery("search?q="+termino+"&type=artist&limit=15").pipe(map(data => data["artists"].items));
  }

  getArtista(id:String){
    return this.getQuery("artists/"+id);
    // .pipe(map( data=> ))
  }
}
