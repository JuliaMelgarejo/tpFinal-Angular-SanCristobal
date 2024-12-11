import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from "./components/message/message.component";
import { PersonComponent } from "./components/person/person.component";
import { MoviesComponent } from './components/movies/movies.component.js';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MovieListComponentComponent } from "./components/movie-list-component/movie-list-component.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MovieListComponentComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_app';
}
