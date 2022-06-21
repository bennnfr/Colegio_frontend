import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnosinfo: any;
  showModal!: boolean;
  showModalmod!: boolean;
  alumno = {
    Nombre: '',
    Apellidos: '',
    Genero: '',
    Fnacimiento: ''
  }
  alumnomod = {
    _id: '',
    Nombre: '',
    Apellidos: '',
    Genero: '',
    Fnacimiento: ''
  }
  constructor( public alumnos: AlumnosService ) { }

  ngOnInit(): void {
    Swal.showLoading()
    this.alumnos.getAlumnos().subscribe( r => {Swal.close()
       this.alumnosinfo = r
        
      } );
  }

  show() {
    this.showModal = true;
  }
  hide() {
    this.showModal = false;
  }
  showmod(item: any) {
    
    this.alumnomod._id = item._id
    this.alumnomod.Nombre = item.Nombre
    this.alumnomod.Apellidos = item.Apellidos
    this.alumnomod.Genero = item.Genero
    this.alumnomod.Fnacimiento = item.Fnacimiento

    this.showModalmod = true
  }
  hidemod() {
    this.showModalmod = false;
  }

  postAlumno() {
    if (this.alumno.Nombre === '' || this.alumno.Apellidos === '' || this.alumno.Fnacimiento === '' || this.alumno.Genero==='') {
      Swal.fire('Todos los campos son requeridos','','warning')
    } else {
      this.alumnos.postAlumno(this.alumno).subscribe( r => {
        Swal.fire({
          title: 'El alumno',
          text: 'fue creado con exito',
          icon: 'success',
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

  delAlumno(id: string) {
    
    Swal.fire({
      title: 'Desea Eliminar al alumno',
      text: 'Seleccionado',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      allowOutsideClick: false
    }). then ( resp => {
      if ( resp.value) {

        this.alumnos.delAlumno(id).subscribe( () => {
          Swal.fire({
            title: 'El alumno',
            text: 'fue eliminado con exito',
            icon: 'success',
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

  putAlumno() {
    if (this.alumnomod.Nombre === '' || this.alumnomod.Apellidos === '' || this.alumnomod.Fnacimiento === '' || this.alumnomod.Genero==='') {
      Swal.fire('Todos los campos son requeridos','','warning')
    } else {
      this.alumnos.putAlumno(this.alumnomod).subscribe( r => {
        Swal.fire({
          title: 'El alumno',
          text: 'fue modificado con exito',
          icon: 'success',
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
