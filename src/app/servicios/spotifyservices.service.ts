import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyservicesService {

  constructor(private http:HttpClient) {
    console.log("Listo para usar los servicios")
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAQ0wIiK1pALSGMACgyxiqStM2gRXmmoLr9qN-SrbyRPYz01YjBOo4KMMQ1p9JLIXn5EnfRa_Lc8HFLHm4'
    });
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers});
  }
}
