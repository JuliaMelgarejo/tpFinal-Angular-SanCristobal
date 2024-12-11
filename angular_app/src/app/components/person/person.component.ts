import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
    datos: { nombre: string; edad: number; ciudad: string; profesion: string } = {
    nombre: 'Julia',
    edad: 30,
    ciudad: 'Madrid',
    profesion: 'Desarrolladora'
}
}