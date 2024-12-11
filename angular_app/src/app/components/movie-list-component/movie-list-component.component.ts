import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Movie } from '../../models/movie.js';
import { MovieItemComponentComponent } from '../movie-item-component/movie-item-component.component.js';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-movie-list-component',
  imports: [CommonModule, MovieItemComponentComponent, SearchBarComponent],
  templateUrl: './movie-list-component.component.html',
  styleUrl: './movie-list-component.component.css'
})
export class MovieListComponentComponent {
   searchTerm: string = '';

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


  selectedMovie: string = " ";

  filteredMovies: Movie[] = [...this.movies];

  onSearchTermChange(searchTerm: string): void {
    this.searchTerm = searchTerm; 
    this.filteredMovies = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );}
 
  onMovieSelected(movieTitle: string): void {
    //this.selectedMovie = this.movies.find(movie => movie.title === movieTitle) || null;
    this.selectedMovie = movieTitle;
  }

}
