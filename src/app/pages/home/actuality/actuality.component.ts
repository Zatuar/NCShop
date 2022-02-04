import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/global/variablesGlobals';

    // Variables globales
    let compteur = 0 // Compteur qui permettra de savoir sur quelle slide nous sommes
    let timer: NodeJS.Timeout, elements: HTMLElement | null, slides:number, slideWidth: number
@Component({
  selector: 'app-actuality',
  templateUrl: './actuality.component.html',
  styleUrls: ['./actuality.component.scss']
})
export class ActualityComponent implements OnInit {

  actualities = Globals.actualities
  //*ngFor="let actuality of actualities"
  //[ngStyle]="{'background-image': 'url(' + actuality.img + ')'}"

  constructor() { }

  ngOnInit(): void {
    // On récupère le conteneur principal du diaporama
    const diapo = document.querySelector(".diapo")!

    // On récupère le conteneur de tous les éléments
    elements = document.querySelector(".elements")
    // On récupère le nombre de slide
    slides=this.actualities.length
    // On calcule la largeur visible du diaporama
    slideWidth = diapo!.getBoundingClientRect().width

    // On récupère les deux flèches
    let next = document.querySelector("#nav-droite")!
    let prev = document.querySelector("#nav-gauche")!

    // On met en place les écouteurs d'évènements sur les flèches
    next.addEventListener("click", this.slideNext)
    prev.addEventListener("click", this.slidePrev)

    // Automatiser le diaporama
    timer = setInterval(this.slideNext, 10000)

    // Gérer le survol de la souris
    diapo.addEventListener("mouseover", this.stopTimer)
    diapo.addEventListener("mouseout", this.startTimer)

    // Mise en oeuvre du "responsive"
    window.addEventListener("resize", () => {
        slideWidth = diapo!.getBoundingClientRect().width
        this.slideNext()
    })
  }
  slideNext(){
  // On incrémente le compteur
  compteur++

  // Si on dépasse la fin du diaporama, on "rembobine"
  if(compteur == slides){
      compteur = 0
  }

  // On calcule la valeur du décalage
  let decal = -slideWidth * compteur
  elements!.style.transform = `translateX(${decal}px)`
}
slidePrev(){
  // On décrémente le compteur
  compteur--

  // Si on dépasse le début du diaporama, on repart à la fin
  if(compteur < 0){
      compteur = slides - 1
  }

  // On calcule la valeur du décalage
  let decal = -slideWidth * compteur
  elements!.style.transform = `translateX(${decal}px)`
}
stopTimer(){
  clearInterval(timer)
}
startTimer(){
  timer = setInterval(this.slideNext, 10000)
}
}
