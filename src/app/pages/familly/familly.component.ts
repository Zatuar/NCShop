import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/global/variablesGlobals';

@Component({
  selector: 'app-familly',
  templateUrl: './familly.component.html',
  styleUrls: ['./familly.component.scss']
})
export class FamillyComponent implements OnInit {
  sfamily = Products.familly[0].sfamily
  family!: string | null;
  constructor(
    private route: ActivatedRoute) {
      console.log(this.family);
    }

  ngOnInit(): void {
    this.family = this.route.snapshot.paramMap.get('family');
    console.log(this.family)
  }

}
