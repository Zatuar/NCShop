import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilComponent } from './pages/profil/profil.component';
import { HomeComponent } from './pages/home/home.component';
import { FamillyComponent } from './pages/familly/familly.component';
import { BasketComponent } from './pages/basket/basket.component';
import { ListComponent } from './pages/list/list.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'profil',component: ProfilComponent},
  {path:'basket',component: BasketComponent},
  {path:':family',component: FamillyComponent},
  {path:':family/:sfamily/list',component: ListComponent},
  {path:'product/:ref',component: ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
