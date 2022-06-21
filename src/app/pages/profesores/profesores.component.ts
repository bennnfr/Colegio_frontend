import { Component, OnInit } from '@angular/core';
import { GradosService } from 'src/app/services/grados.service';
import { ProfesoresService } from 'src/app/services/profesores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  profesoresinfo: any;
  showModal!: boolean;
  showModalmod!: boolean;
  profesor = {
    Nombre: '',
    Apellidos: '',
    Genero: ''
  }
  profesormod = {
    _id: '',
    Nombre: '',
    Apellidos: '',
    Genero: '',
  }
  constructor( public profesores: ProfesoresService,
               public grados: GradosService ) { }

  ngOnInit(): void {
    Swal.showLoading()
    this.profesores.getProfesoress().subscribe( r => {
     this.profesoresinfo = r
    Swal.close()} );
  }

  show() {
    this.showModal = true;
  }
  hide() {
    this.showModal = false;
  }
  showmod(item: any) {

    this.profesormod._id = item._id
    this.profesormod.Nombre = item.Nombre
    this.profesormod.Apellidos = item.Apellidos
    this.profesormod.Genero = item.Genero
    this.showModalmod = true
  }
  hidemod() {
    this.showModalmod = false;
  }

  postProfesor() {
    if (this.profesor.Nombre === '' || this.profesor.Apellidos === '' || this.profesor.Genero==='') {
      Swal.fire('Todos los campos son requeridos','','warning')
    } else {
      this.profesores.postProfesor(this.profesor).subscribe( r => {
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

  delProfesor(id: string) {
    
    Swal.fire({
      title: 'Desea eliminar al profesor',
      text: 'Seleccionado',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      allowOutsideClick: false
    }). then ( resp => {
      if ( resp.value) {

        this.profesores.delProfesor(id).subscribe( (r) => {
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

  putProfesor() {
    if (this.profesormod.Nombre === '' || this.profesormod.Apellidos === '' || this.profesormod.Genero==='') {
      Swal.fire('Todos los campos son requeridos','','warning')
    } else {
      this.profesores.putProfesor(this.profesormod).subscribe( r => {
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
