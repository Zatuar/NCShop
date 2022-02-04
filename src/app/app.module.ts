import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { CategoriesComponent } from './global/header/categories/categories.component';
import { FooterComponent } from './global/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { ActualityComponent } from './pages/home/actuality/actuality.component';
import { PromoComponent } from './pages/home/promo/promo.component';
import { CataloguesComponent } from './pages/home/catalogues/catalogues.component';
import { ServicesComponent } from './pages/home/services/services.component';
import {ProfilComponent} from './pages/profil/profil.component';
import { BasketComponent } from './pages/basket/basket.component';
import { FamillyComponent } from './pages/familly/familly.component';
import { ListComponent } from './pages/list/list.component';
import { FiltersComponent } from './pages/list/filters/filters.component';
import { ItemComponent } from './pages/list/item/item.component';
import { ProductComponent } from './pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    ActualityComponent,
    PromoComponent,
    CataloguesComponent,
    ServicesComponent,
    BasketComponent,
    ProfilComponent,
    FamillyComponent,
    ListComponent,
    FiltersComponent,
    ItemComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
