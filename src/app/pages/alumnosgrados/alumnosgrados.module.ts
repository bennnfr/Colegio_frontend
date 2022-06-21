import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosgradosRoutingModule } from './alumnosgrados-routing.module';
import { AlumnosgradosComponent } from './alumnosgrados.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlumnosgradosComponent
  ],
  imports: [
    CommonModule,
    AlumnosgradosRoutingModule,
    FormsModule
  ]
})
export class AlumnosgradosModule { }
