import { Injectable } from '@angular/core';
import Produit from '../models/produit';
import Profil from '../models/profil';
@Injectable({ providedIn: 'root' })
export class Products {
    static AllProduct: Array<Produit> =[
        new Produit("A web site","001LR",0,0,1,"This is the v0 of NewClark's website",["Angular","NodeJS"],[100,100,100],["../../../assets/images/Build_website.jpg"],false,true,"informatique",0),
        new Produit("Item 2","UGEZ3",12,0,1,"This is the Example Item 2",["Plastic","Céramique"],[100,100],["../../../assets/images/Build_website.jpg"],false,true,"informatique",0),
        new Produit("Item 3","H64G8",5.5,20,1,"This is the Item 3",["Bois","Inox"],[100,100,100],["../../../assets/images/Build_website.jpg"],true,true,"informatique",0)
    ]
    static familly = [
        {
            name : "Hygiene",
            sfamily : [
                "liquide",
                "Brosse"
            ]
        },
        {
          name:'Hygiène',
          sfamily:[
              "alcool"
          ]
        },
        {
          name:'Assiettes',
          sfamily:[
            "rondes",
            "carrée"
          ]
        },
        {
          name:'Hygiène',
          sfamily:[
            "graisse"
          ]
        },
        {
          name:'Contenant individuels',
          sfamily:[
            "verre",
            "bole"
          ] 
        },
        {
          name:'Mise en bouche',
          sfamily:[
            "vérine"
          ]
        }
    ]
    static filtres = [
        {
            name : "couleurs",
            options : [
                "rouge",
                "bleu"
            ]
        },
        {
            name: "forme",
            options: [
                "rond",
                "carré",
            ]
        }
    ]
}
@Injectable({ providedIn: 'root' })
export class Globals {
    static actualities = [
        {
          title : "Que l'amour soit avec vous",
          img : "../../../../assets/actuality/SV_10_14.jpg",
          text : "C'est bientôt le Saint Valentin, faite le plein d'amour avec notre gamme rouge intense"
        },
        {
          title : "Laisse tombé",
          img : "../../../../favicon.ico",
          text : "Descriptif de l'actualité"
        }
      ]
}
@Injectable({ providedIn: 'root' })
export class ProfilClient {
    static client: Profil = new Profil("../../../favicon.ico",
    "Clark","New","myemail","0643495746","92 rue NewClark","92 rue Carlimpex",true,"Bestwebsite","restock",11122233344444,5,123,"restauration",8,30);
    static ShoppingList: Produit[] =[
    ]

}