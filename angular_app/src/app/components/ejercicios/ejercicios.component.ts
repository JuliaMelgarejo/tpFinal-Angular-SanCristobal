import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { PersonComponent } from '../person/person.component';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-ejercicios',
  imports: [MessageComponent, PersonComponent, MoviesComponent],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css'
})
export class EjerciciosComponent {

}
