import { Component, OnInit} from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public Nservice: NoticiasService) {}

  ngOnInit(): void{
    this.Nservice.getNoticias()    
  }

}
