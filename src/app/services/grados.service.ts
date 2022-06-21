import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradosService {
  constructor( public http: HttpClient ) { }

  getGrados() {
    const url = `${environment.URL_SERVICIOS}api/grados`;
    return this.http.get(url).pipe(
      map( (resp: any) => {
        return this.crearArregloList(resp);
      } )
    );
  }

  getGrador(id: string) {
    const url = `${environment.URL_SERVICIOS}api/grados/${id}`;
    return this.http.get(url).pipe(
      map( (resp: any) => {
        return (resp);
      } )
    );
  }

  crearArregloList( contribuObj: any) {

    return contribuObj.grados;

  }

  delGrado(id: string) {
  const url = `${environment.URL_SERVICIOS}api/grados/${id}`;
  return this.http.delete(url).pipe(
    map( (resp: any) => {
      return (resp);
    } )
  );
  }

  postGrado(grado: any) {
    const url = `${environment.URL_SERVICIOS}api/grados`;

    return this.http.post( url, grado ).pipe(
      map( (resp: any) => {
          return resp 
      }));
  }

  putGrado( grado: any ) {
    const url = `${environment.URL_SERVICIOS}api/grados/${grado._id}`;
    return this.http.put( url, grado ).pipe(
      map( (resp: any) => {
          return resp 
      }));
  }
}
