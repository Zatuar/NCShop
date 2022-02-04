import { Component, OnInit } from '@angular/core';
import Produit from 'src/app/models/produit';
import { Products, ProfilClient } from 'src/app/global/variablesGlobals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  produit!:Produit
  qt = 1;
  panier!: Array<Produit>
  constructor(
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    let ref = this.route.snapshot.paramMap.get('ref');
    this.produit = Products.AllProduct.find((h: any) => h.ref === ref)!;
    if(sessionStorage.getItem("ShoppingList")){
    this.panier = JSON.parse(sessionStorage.getItem("ShoppingList")!);
    console.log("session" + this.panier)
    } else {
      this.panier=ProfilClient.ShoppingList;
      console.log(this.panier)
    }
  }
  buy(ref:string){
    let add = false;
    this.panier.forEach(exist => {
      if(exist.ref == ref && !add){
        exist.acheter+=this.qt
        add=true
      }
    });
    if(!add){
      this.panier.forEach(element => {
        if(element.ref == ref){
          this.panier.push(element);
          element.acheter=1
        }
      });
    }
    console.log(this.panier)
    sessionStorage.setItem("ShoppingList",this.panier.toString())
  }
  minus(){
    if(this.qt>= 1) this.qt--
  }
  plus(){
    this.qt++;
  }
}
