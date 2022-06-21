import { Component, OnInit } from '@angular/core';
import { GradosService } from 'src/app/services/grados.service';
import { ProfesoresService } from 'src/app/services/profesores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent implements OnInit {
  gradosinfo: any;
  profesoresinfo: any;
  profesoresinfomod: any;
  showModal!: boolean;
  showModalmod!: boolean;
  grado = {
    Nombre: '',
    ProfesorId: ''
  }
  gradomod = {
    _id: '',
    Nombre: '',
    ProfesorId: '',
    NombreProfesor: ''
  }
  constructor( public grados: GradosService,
               public profesores: ProfesoresService ) { }

  ngOnInit(): void {
    Swal.showLoading()
    this.grados.getGrados().subscribe( r => {
    this.gradosinfo = r
    Swal.close()
    } );
  }

  show() {
    this.profesores.getProfesoress().subscribe(r => { 
    this.profesoresinfo = r;
    })
    this.showModal = true;
  }
  hide() {
    this.showModal = false;
  }
  showmod(item: any) {
    
    
    this.profesores.getProfesoress().subscribe(r => { 
      this.profesoresinfomod = r;
      this.gradomod._id = item._id
      this.gradomod.Nombre = item.Nombre
      this.gradomod.ProfesorId = item.ProfesorId
      this.gradomod.NombreProfesor = item.NombreProfesor
      this.showModalmod = true
      })
    
  }
  hidemod() {
    this.showModalmod = false;
  }

  postGrado() {
    
    if (this.grado.Nombre === '' || this.grado.ProfesorId === '') {
      Swal.fire('Todos los campos son requeridos','','warning')
    } else {
      this.grados.postGrado(this.grado).subscribe( r => {
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

  delGrado(id: string) {
    
    
    Swal.fire({
      title: 'Desea Eliminar el grado',
      text: 'Seleccionado',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      allowOutsideClick: false
    }). then ( resp => {
      if ( resp.value) {

        this.grados.delGrado(id).subscribe( (r) => {
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

  putGrado() {
    
    if (this.gradomod.Nombre === '' || this.gradomod.ProfesorId === '') {
      Swal.fire('Todos los campos son requeridos','','warning')
    } else {
      this.grados.putGrado(this.gradomod).subscribe( r => {
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
