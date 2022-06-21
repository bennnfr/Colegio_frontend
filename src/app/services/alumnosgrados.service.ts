import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosgradosService {
  constructor( public http: HttpClient ) { }

  getAlumnosGrados() {
    const url = `${environment.URL_SERVICIOS}api/alumnosgrados`;
    return this.http.get(url).pipe(
      map( (resp: any) => {
        return this.crearArregloList(resp);
      } )
    );
  }

  getAlumnoGrado(id: string) {
    const url = `${environment.URL_SERVICIOS}api/alumnosgrados/${id}`;
    return this.http.get(url).pipe(
      map( (resp: any) => {
        return (resp);
      } )
    );
  }

  crearArregloList( contribuObj: any) {

    return contribuObj.alumnosgrados;

  }

  delAlumnoGrado(id: string) {
  const url = `${environment.URL_SERVICIOS}api/alumnosgrados/${id}`;
  return this.http.delete(url).pipe(
    map( (resp: any) => {
      return (resp);
    } )
  );
  }

  postAlumnoGrado(grado: any) {
    const url = `${environment.URL_SERVICIOS}api/alumnosgrados`;

    return this.http.post( url, grado ).pipe(
      map( (resp: any) => {
          return resp 
      }));
  }

  putAlumnoGrado( grado: any ) {
    const url = `${environment.URL_SERVICIOS}api/alumnosgrados/${grado._id}`;
    return this.http.put( url, grado ).pipe(
      map( (resp: any) => {
          return resp 
      }));
  }
}
