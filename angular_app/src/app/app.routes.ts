import { Routes } from '@angular/router';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { MovieListComponentComponent } from './components/movie-list-component/movie-list-component.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: "ejercicios", component: EjerciciosComponent},
    {path: "movies-list", component: MovieListComponentComponent},
    { path: '',redirectTo: 'home',pathMatch: 'full' }, 
    {path: 'home', component: HomeComponent},
];

