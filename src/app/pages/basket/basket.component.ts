import { Component, OnInit } from '@angular/core';
import { ProfilClient } from 'src/app/global/variablesGlobals';



@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  panier = ProfilClient.ShoppingList
  total = 0
  constructor() { }

  ngOnInit(): void {
    this.panier = JSON.parse(sessionStorage.getItem("ShoppingList")!) 
    this.panier.forEach(price => {
      this.total= this.total + (price.prix * price.acheter);
    })
    
  }
  deleteProduit(ref:string){
    this.panier.forEach((element,index)=>{
      if(element.ref== ref){
        this.panier.splice(index,1);
        this.total=this.total-(element.acheter * element.prix);
      }
   });
  }

}
