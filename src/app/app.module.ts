import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

//Importamos las rutas de la aplicación
import {routing} from './app.routing';
import { HeaderComponentComponent } from './template/header-component/header-component.component';
import { HomeComponentComponent } from './template/home-component/home-component.component';
import { AsideComponentComponent } from './template/aside-component/aside-component.component';
import { FooterComponentComponent } from './template/footer-component/footer-component.component';
import { MaterialModule } from '@angular/material';
import { ExperimentsComponent } from './sections/experiments/experiments.component';
import { AlgoritmsComponent } from './sections/algoritms/algoritms.component';
import { ArticlesComponent } from './sections/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    AsideComponentComponent,
    FooterComponentComponent,
    ExperimentsComponent,
    AlgoritmsComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
