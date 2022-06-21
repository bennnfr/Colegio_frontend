import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { AlumnosgradosService } from 'src/app/services/alumnosgrados.service';
import { GradosService } from 'src/app/services/grados.service';
import { ProfesoresService } from 'src/app/services/profesores.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-alumnosgrados',
  templateUrl: './alumnosgrados.component.html',
  styleUrls: ['./alumnosgrados.component.css']
})
export class AlumnosgradosComponent implements OnInit {

  alumnosgradosinfo: any;
  alumnosgradoinfo: any;
  gradoinfo: any;
  alumnosgradosinfomod: any;
  gradosinfomod: any;
  showModal!: boolean;
  showModalmod!: boolean;
  alumnogrado = {
    AlumnoId: '',
    GradoId: '',
    Seccion: ''
  }
  alumnogradomod = {
    _id: '',
    Seccion: '',
    GradoId: '',
    NombreGrado: '',
    AlumnoId: '',
    NombreAlumno: ''
  }
  constructor( public alumnosgrados: AlumnosgradosService,
               public alumnos: AlumnosService,
               public grados: GradosService ) { }

  ngOnInit(): void {
    Swal.showLoading()
    this.alumnosgrados.getAlumnosGrados().subscribe( r => {
      this.alumnosgradosinfo = r
    Swal.close()
    } );
  }

  show() {
    this.alumnos.getAlumnos().subscribe(r => { 
    this.alumnosgradoinfo = r;
    })
    this.grados.getGrados().subscribe(r => { 
      this.gradoinfo = r;
      })
    this.showModal = true;
  }
  hide() {
    this.showModal = false;
  }
  showmod(item: any) {
    
    this.alumnos.getAlumnos().subscribe(r => {
      this.alumnosgradosinfomod = r;
      this.alumnogradomod._id = item._id
      this.alumnogradomod.Seccion = item.Seccion
      this.alumnogradomod.GradoId = item.GradoId
      this.alumnogradomod.NombreGrado = item.NombreGrado
      this.alumnogradomod.AlumnoId = item.AlumnoId
      this.alumnogradomod.NombreAlumno = item.NombreAlumno
      this.showModalmod = true
      })
    this.grados.getGrados().subscribe(r => { 
    this.gradosinfomod = r
    })
    
  }
  hidemod() {
    this.showModalmod = false;
  }

  postAlumnoGrado() {
    
    if (this.alumnogrado.AlumnoId === '' || this.alumnogrado.GradoId === '' || this.alumnogrado.Seccion === '') {
      Swal.fire('Todos los campos son requeridos','','warning')
    } else {
      this.alumnosgrados.postAlumnoGrado(this.alumnogrado).subscribe( r => {
        Swal.fire({
          title: r.msg,
          text: '',
          icon: 'info',
          showConfirmButton: true,
          showCancelButton: false,
          allowOutsideClick: false
        }). then ( res => {
          if ( res.value ) {
            this.hide();
            this.ngOnInit();
          }
        } );
      } )
    }
    
  }

  delAlumnoGrado(id: string) {
    
    Swal.fire({
      title: 'Desea Eliminar el Alumnogrado',
      text: 'Seleccionado',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      allowOutsideClick: false
    }). then ( resp => {
      if ( resp.value) {

        this.alumnosgrados.delAlumnoGrado(id).subscribe( (r) => {
          Swal.fire({
            title: r.msg,
            text: '',
            icon: 'info',
            showConfirmButton: true,
            showCancelButton: false,
            allowOutsideClick: false
          }). then ( res => {
            if ( res.value ) {
              this.ngOnInit();
            }
          } );
        })
      }
    });
  }

  putAlumnoGrado() {
    
    if (this.alumnogradomod.AlumnoId === '' || this.alumnogradomod.GradoId === '' || this.alumnogradomod.Seccion === '') {
      Swal.fire('Todos los campos son requeridos','','warning')
    } else {
      this.alumnosgrados.putAlumnoGrado(this.alumnogradomod).subscribe( r => {
        Swal.fire({
          title: r.msg,
          text: '',
          icon: 'info',
          showConfirmButton: true,
          showCancelButton: false,
          allowOutsideClick: false
        }). then ( res => {
          if ( res.value ) {
            this.hidemod();
            this.ngOnInit();
          }
        } );
      } )
    }
  }

}
