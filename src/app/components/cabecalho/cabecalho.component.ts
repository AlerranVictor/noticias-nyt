import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

  constructor(private renderer: Renderer2) { }

  mostrarMenu(){
    let control = 0
    const barras = document.getElementById('barras')
    const barraOpen = document.getElementById('barraOpen')

    if (control === 0){
      this.renderer.removeClass(barraOpen, 'menu-invisivel')
      this.renderer.addClass(barras, 'menu-visivel')
      
      control += 1
    }
    else {
      this.renderer.removeClass(barras, 'menu-visivel')
      this.renderer.addClass(barras, 'menu-invisivel')
      control -= 1
    }
  }

}
