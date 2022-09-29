import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from '@rxjs/operators';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private paisService: PaisService ) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe()
         .subscribe()
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
