import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor( public http: HttpClient ) { }

  getProfesoress() {
    const url = `${environment.URL_SERVICIOS}api/profesores`;
    return this.http.get(url).pipe(
      map( (resp: any) => {
        return this.crearArregloList(resp);
      } )
    );
  }

  getProfesor(id: string) {
    const url = `${environment.URL_SERVICIOS}api/profesores/${id}`;
    return this.http.get(url).pipe(
      map( (resp: any) => {
        return (resp);
      } )
    );
  }

  crearArregloList( contribuObj: any) {

    return contribuObj.profesores;

  }

  delProfesor(id: string) {
  const url = `${environment.URL_SERVICIOS}api/profesores/${id}`;
  return this.http.delete(url).pipe(
    map( (resp: any) => {
      return (resp);
    } )
  );
  }

  postProfesor(profesor: any) {
    const url = `${environment.URL_SERVICIOS}api/profesores`;

    return this.http.post( url, profesor ).pipe(
      map( (resp: any) => {
          return resp 
      }));
  }

  putProfesor( profesor: any ) {
    const url = `${environment.URL_SERVICIOS}api/profesores/${profesor._id}`;
    return this.http.put( url, profesor ).pipe(
      map( (resp: any) => {
          return resp 
      }));
  }
}
