import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
    movies = [
    { title: 'Inception', year: 2010, description: 'A mind-bending thriller by Christopher Nolan.' },
    { title: 'The Godfather', year: 1972, description: 'A crime drama about a powerful mafia family.' },
    { title: 'Pulp Fiction', year: 1994, description: 'A darkly comedic crime film by Quentin Tarantino.' },
    { title: 'The Dark Knight', year: 2008, description: 'A superhero movie featuring Batman.' },
    { title: 'Forrest Gump', year: 1994, description: 'A heartwarming tale of an extraordinary man.' },
    { title: 'The Shawshank Redemption', year: 1994, description: 'A story of hope and friendship in prison.' },
    { title: 'The Matrix', year: 1999, description: 'A sci-fi film that questions reality itself.' },
    { title: 'Fight Club', year: 1999, description: 'A psychological drama about identity and rebellion.' },
    { title: 'Gladiator', year: 2000, description: 'An epic tale of revenge and honor in Ancient Rome.' },
    { title: 'Interstellar', year: 2014, description: 'A journey through space and time to save humanity.' }
  ];

  constructor() { }

    getMovies() {
    return this.movies;
  }
}
