import { Component } from '@angular/core';
import { SerieService } from '../../services/serie/serie.service.js';
import { Serie } from '../../models/serie.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series',
  imports: [CommonModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  series: Serie[] = [];
  titleSerie: string = '';
  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.getTitle().subscribe(response => {
      if (response && response.Title) {
        this.titleSerie = response.Title;
      }
    });

    this.serieService.getEpisodes().subscribe(response => {
      if (response && response.Episodes) {
        this.series = response.Episodes;
  }
  });
}
  }