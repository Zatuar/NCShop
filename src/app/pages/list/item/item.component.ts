import { Component, OnInit } from '@angular/core';
import { Products, ProfilClient } from 'src/app/global/variablesGlobals';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  products = Products.AllProduct
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  buy(ref:string){
    let add = false;
    ProfilClient.ShoppingList.forEach(exist => {
      if(exist.ref == ref){
        exist.acheter++;
        add=true;
      }
    });
    if(!add){
      Products.AllProduct.forEach(element => {
        if(element.ref == ref){
          ProfilClient.ShoppingList.push(element);
          element.acheter=1
        }
      });
    }
  }
}
