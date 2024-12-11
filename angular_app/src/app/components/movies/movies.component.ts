import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
    movies = [
    { titulo: 'Inception',
      director: 'Christopher Nolan', 
      anio: 2010, 
      genero: 'Ciencia Ficción' },

    { titulo: 'The Godfather', 
      director: 'Francis Ford Coppola', 
      anio: 1972, 
      genero: 'Crimen' },

    { titulo: 'Pulp Fiction', 
      director: 'Quentin Tarantino', 
      anio: 1994, 
      genero: 'Drama' },

    { titulo: 'The Dark Knight', 
      director: 'Christopher Nolan', 
      anio: 2008, 
      genero: 'Acción' }
  ];

}
