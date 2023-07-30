import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasService } from './services/noticias.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
