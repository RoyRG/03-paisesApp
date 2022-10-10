import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }

    `
  ]
})
export class PorPaisComponent {
termino: string = '';
hayError: boolean = false;
paises: Country[] = [];
paisesSugeridos: Country[] = [];
mostrarSugerencias: boolean = false; 
  constructor( private paisService: PaisService ) { }

  buscar(termino: string ){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais( this.termino )
    .subscribe({
     next: (data) => {
      this.paises = data;
      console.log(this.paises);
     },
     error: () => {
      this.hayError = true;
      this.paises = [];
    }
    })
  }
  sugerencias( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais( termino )
    .subscribe( {
      next: (data) => {
        this.paisesSugeridos = data.splice(0,5)
      },
      error:() =>{
        this.paisesSugeridos = []
      }})
  }
buscarSugerido( termino: string ){
    this.buscar( termino );
}
}
