import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }

  getTitle(): Observable<{Title: string}> {
    return this.http.get<{Title: string}>('https://www.omdbapi.com/?apikey=2ff6c6e4&t=From&Season=1');
  }
  getEpisodes(): Observable<{Episodes: []}>
  {
   return  this.http.get<{Episodes: []}>('https://www.omdbapi.com/?apikey=2ff6c6e4&t=From&Season=1')
  } 
}
