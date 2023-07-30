import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = "https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=6DGAQ5wFZ010bD0AqkZuZG8wG05wbzTz"

  constructor(private httpClient: HttpClient) { }
  card_noticias = [] as Noticia[];

  async getNoticias() {
    const lista = await this.httpClient.get<any>(this.url).toPromise();
    this.card_noticias = lista.results;
    console.log(this.card_noticias)
  }
}
