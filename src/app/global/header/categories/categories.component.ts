import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../variablesGlobals';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoryL=Products.familly
  showed=false
  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  show(): void {

  }
  routing(): void {
    let root = this.route.snapshot.paramMap.get('family')
    if(root!=null){
    location.reload()
    }
  }

}
