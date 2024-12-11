import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
searchTerm: string = '';

  //@Output() searchTermChange = new EventEmitter<string>(); // Evento para emitir el término

  // Método para emitir el término en tiempo real
  /*onSearchTermChange(): void {
    this.searchTermChange.emit(this.searchTerm);
  }*/

}
