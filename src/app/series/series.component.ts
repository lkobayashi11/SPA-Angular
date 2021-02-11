import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  year: number;
  cast: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Game of Thrones', year: 2011, cast: ' Emilia Clarke, Peter Dinklage, Kit Harington'},
  {position: 2, name: 'Família Soprano ', year: 1999, cast: 'James Gandolfini, Lorraine Bracco, Edie Falco'},
  {position: 3, name: 'Sherlock ', year: 2010, cast: 'Benedict Cumberbatch, Martin Freeman, Una Stubbs'},
  {position: 4, name: 'Friends ', year: 1994, cast: 'Jennifer Aniston, Courteney Cox, Lisa Kudrow'},
  {position: 5, name: 'House ', year: 2004, cast: 'Hugh Laurie, Omar Epps, Robert Sean Leonard'},
];


@Component({
  selector: 'spa-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'year', 'cast'];
  dataSource = ELEMENT_DATA;

  exibeTabelaSerie:  boolean = false

  constructor() { }

  ngOnInit() {
  }

  exibirTabelaSerie(){
    this.exibeTabelaSerie = true;
  }


}

