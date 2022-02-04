
export default class Profil {

    logo:string;
    nom:string;
    prenom: string;
    email: string;
    phone: string;
    delivery: string;
    facture: string;
    type:boolean;
    enseigne:string;
    rs:string;
    siret:number;
    tva:number;
    rib:number;
    ap:string;
    heures:number;
    minutes: number;

    constructor( logo:string,
        nom:string,
        prenom:string,
        email: string,
        phone: string,
        delivery: string,
        facture: string,
        type:boolean,
        enseigne:any,
        rs:string,
        siret:number,
        tva:number,
        rib:number,
        ap:string,
        heures:number,
        minutes:number){
            this.logo = logo;
        this.nom= nom;
        this.prenom= prenom;
        this.email= email;
        this.phone= phone;
        this.delivery= delivery;
        this.facture= facture;
        this.type= type;
        this.enseigne= enseigne;
        this.rs= rs;
        this.siret= siret;
        this.tva= tva;
        this.rib= rib;
        this.ap= ap;
        this.heures= heures;
        this.minutes= minutes;
    }
}