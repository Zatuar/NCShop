
export default class Produit {

    nom: string;
    ref: string;
    prix: number;
    reduction: number;
    quantite:number;
    descriptif: string;
    materiaux:string[];
    dimensions:number[];
    images:string[];
    nouveau: boolean;
    statut:boolean;
    famille:string;
    acheter:number;
    
    constructor(nom: string,
        ref: string,
        prix: number,
        reduction: number,
        quantite:number,
        descriptif: string,
        materiaux:string[],
        dimensions:number[],
        images:string[],
        nouveau:boolean,
        statut:boolean,
        famille:string,
        acheter:number){
        this.nom = nom;
        this.ref = ref;
        this.prix = prix;
        this.reduction = reduction;
        this.quantite = quantite;
        this.descriptif = descriptif;
        this.materiaux = materiaux;
        this.dimensions = dimensions;
        this.images = images;
        this.nouveau = nouveau;
        this.statut = statut;
        this.famille = famille;
        this.acheter = acheter;
    }
}