import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { MihomeComponent } from './mihome/mihome.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { HttpClientModule } from '@angular/common/http';
import { DatosComponent } from './datos/datos.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    MihomeComponent,
    PersonajesComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
