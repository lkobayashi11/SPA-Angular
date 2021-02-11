import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimesComponent } from './animes/animes.component';
import { FilmesComponent } from './filmes/filmes.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'filmes',
    component: FilmesComponent
  },
  {
    path:'series',
    component: SeriesComponent
  },
  {
    path:'animes',
    component: AnimesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
