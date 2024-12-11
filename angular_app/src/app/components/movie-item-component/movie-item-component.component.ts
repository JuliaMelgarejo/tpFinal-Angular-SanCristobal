import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-item-component',
  imports: [CommonModule],
  templateUrl: './movie-item-component.component.html',
  styleUrl: './movie-item-component.component.css'
})
export class MovieItemComponentComponent {
  @Input() movie!: Movie; 
  @Output() movieSelected = new EventEmitter<string>(); 

  selectMovie(): void {
    this.movieSelected.emit(this.movie.title);
  }

}
