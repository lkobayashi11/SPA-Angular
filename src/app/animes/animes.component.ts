import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Anime {
  name: string;
  position: number;
  year: number;
  cast: string;
}

const ANIME_DATA: Anime[] = [
  {position: 1, name: 'Fullmetal Alchemist', year: 2009, cast: ' Kent Williams, Iemasa Kayumi, Vic Mignogna'},
  {position: 2, name: 'Death Note ', year: 2007, cast: ' Mamoru Miyano, Brad Swaile, Vincent Tong'},
  {position: 3, name: 'Ataque dos Titãs', year: 2013, cast: 'Yûki Kaji, Marina Inoue, Yui Ishikawa'},
  {position: 4, name: 'One Punch Man ', year: 2015, cast: 'Makoto Furukawa, Kaito Ishikawa, Max Mittelman'},
  {position: 5, name: 'Dragon Ball Z ', year: 1989, cast: ' Jôji Yanami, Kyle Hebert, Masako Nozawa '},
];

@Component({
  selector: 'spa-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})


export class AnimesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'year', 'cast'];
  dataSource = ANIME_DATA;

  exibeTabelaAnime:  boolean = false

  constructor() { }

  ngOnInit() {


  }

  exibirTabelaAnime(){
    this.exibeTabelaAnime = true;
  }


}
