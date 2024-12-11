import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  mensaje1: string = 'Este es el primer mensaje';
  mensaje2: string = 'Este es el segundo mensaje';
  mostrar: boolean = false;
}
