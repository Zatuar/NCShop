import { Component, OnInit } from '@angular/core';
import { ProfilClient } from 'src/app/global/variablesGlobals';
import Profil from 'src/app/models/profil';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  editable!: boolean;
  date= new Date(2022,6,3,3,4,5);
  client: Profil = ProfilClient.client
  constructor() {
   }

  ngOnInit(): void {
    this.editable=false
  }

}
