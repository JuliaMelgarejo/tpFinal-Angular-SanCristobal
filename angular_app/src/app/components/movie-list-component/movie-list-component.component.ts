import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Movie } from '../../models/movie.js';
import { MovieItemComponentComponent } from '../movie-item-component/movie-item-component.component.js';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { MovieService } from '../../services/movie.service.js';

@Component({
  selector: 'app-movie-list-component',
  imports: [CommonModule, SearchBarComponent, MovieItemComponentComponent],
  templateUrl: './movie-list-component.component.html',
  styleUrl: './movie-list-component.component.css'
})
export class MovieListComponentComponent {
  searchTerm: string = '';
  selectedMovie: string = " ";
  filteredMovies: Movie[] = [];
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.filteredMovies = [...this.movies];
  }
 
  onMovieSelected(movieTitle: string): void {
    this.selectedMovie = movieTitle;
  }

}
