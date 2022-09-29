import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
pais!: Country;
  constructor( private activatedRoute: ActivatedRoute, private paisService: PaisService ) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap( ( params =>  this.paisService.buscarPaisAlpha( params['id'] ))),
          tap(console.log)
        )
         .subscribe({
          next: pais => {this.pais = pais[0] 
          console.log(pais[0].name['common'])}});
// this.activatedRoute.params.subscribe({
//   next: ({id}) => {
//     this.paisService.buscarPaisAlpha( id ).subscribe({
//       next: (pais) => console.log(pais)
//     });
//   },
//   error: () => {
//  }
//  }) un observable que depende de otro observable
   }

}
