import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

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
import { FormGeneratorComponent } from './sections/experiments/form-generator/form-generator.component';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAazx_TSOutGIer0ccHDiNaBv9sUgKxcKU",
    authDomain: "formgenerator-e67e5.firebaseapp.com",
    databaseURL: "https://formgenerator-e67e5.firebaseio.com",
    projectId: "formgenerator-e67e5",
    storageBucket: "formgenerator-e67e5.appspot.com",
    messagingSenderId: "621446355770"
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    AsideComponentComponent,
    FooterComponentComponent,
    ExperimentsComponent,
    AlgoritmsComponent,
    ArticlesComponent,
    FormGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
