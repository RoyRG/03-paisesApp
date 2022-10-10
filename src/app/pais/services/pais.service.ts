import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  get httpParams(){
    return  new HttpParams().set(
      'fields', 'population,translations,name,flags,cca2'
    )
  }
  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${termino}`
  //  return this.http.get(url)
  //             .pipe(
  //               catchError( err => of([])) Sirve para catchar el error cuando se hace la peticion
  //             );
  return this.http.get<Country[]>(url, {params: this.httpParams});
  }
  buscarCapital (termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${termino}`
    return this.http.get<Country[]>(url , {params: this.httpParams});
  }
  buscarRegion (termino: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/region/${termino}?fields=population,translations,name,flags`
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
  buscarPaisAlpha (termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/alpha/${termino}`
    return this.http.get<Country[]>(url);
  }
}
