import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/global/variablesGlobals';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  soldProducts = Products.AllProduct.filter(item => item.reduction != 0);
  soldProduct =[
    {
      name : 'Produit 1',
      ref : 'HY109853986',
      price : 12.5,
      reduction : 25
    },
    {
      name : 'Produit 2',
      ref : 'VA100911987',
      price : 3.95,
      reduction : 10
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
