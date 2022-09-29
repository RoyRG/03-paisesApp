import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent   {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
    constructor( private paisService: PaisService ) { }
  
    buscar(termino: string ){
      this.hayError = false;
      this.termino = termino;
      console.log(this.termino);
      this.paisService.buscarRegion( this.termino )
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
      console.log(termino);
      //TODO: Crear sugerencias
    }
}
