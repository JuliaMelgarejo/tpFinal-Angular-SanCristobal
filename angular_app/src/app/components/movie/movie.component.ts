import { Component } from '@angular/core';
import { MovieListComponentComponent } from "../movie-list-component/movie-list-component.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-movie',
  imports: [MovieListComponentComponent, SearchBarComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

}
