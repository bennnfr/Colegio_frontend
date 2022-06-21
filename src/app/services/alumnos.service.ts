import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AlumnosService {

  constructor( public http: HttpClient ) { }

  getAlumnos() {
    const url = `${environment.URL_SERVICIOS}api/alumnos`;
    return this.http.get(url).pipe(
      map( (resp: any) => {
        return this.crearArregloList(resp);
      } )
    );
  }

  getAlumno(id: string) {
    const url = `${environment.URL_SERVICIOS}api/alumnos/${id}`;
    return this.http.get(url).pipe(
      map( (resp: any) => {
        return (resp);
      } )
    );
  }

  crearArregloList( contribuObj: any) {

    return contribuObj.alumnos;

  }

  delAlumno(id: string) {
  const url = `${environment.URL_SERVICIOS}api/alumnos/${id}`;
  return this.http.delete(url).pipe(
    map( (resp: any) => {
      return (resp);
    } )
  );
  }

  postAlumno(alumno: any) {
    const url = `${environment.URL_SERVICIOS}api/alumnos`;

    return this.http.post( url, alumno ).pipe(
      map( (resp: any) => {
          return resp 
      }));
  }

  putAlumno( alumno: any ) {
    const url = `${environment.URL_SERVICIOS}api/alumnos/${alumno._id}`;
    return this.http.put( url, alumno ).pipe(
      map( (resp: any) => {
          return resp 
      }));
  }

}
