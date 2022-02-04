import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/global/variablesGlobals';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  filtres = Products.filtres
  constructor() { }

  ngOnInit(): void {
  }

}
