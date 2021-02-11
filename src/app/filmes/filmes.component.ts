import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Filme {
  name: string;
  position: number;
  year: number;
  cast: string;
}

const FILME_DATA: Filme[] = [
  {position: 1, name: 'O Senhor dos Anéis: O Retorno do Rei ', year: 2003, cast: ' Elijah Wood, Viggo Mortensen, Ian McKellen'},
  {position: 2, name: 'Matrix ', year: 1999, cast: ' Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss '},
  {position: 3, name: 'Parasita', year: 2019, cast: 'Kang-ho Song, Lee Sun-kyun, Yeo-jeong Cho '},
  {position: 4, name: 'De Volta para o Futuro', year: 1985, cast: ' Michael J. Fox, Christopher Lloyd, Lea Thompson'},
  {position: 5, name: 'Vingadores: Guerra Infinita', year: 2018, cast: 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo '},
];

@Component({
  selector: 'spa-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'year', 'cast'];
  dataSource = FILME_DATA;

  exibeTabelaFilme:  boolean = false

  constructor() { }

  ngOnInit() {
  }

  exibirTabelaFilme(){
    this.exibeTabelaFilme = true;
  }

}
