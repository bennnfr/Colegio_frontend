import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresComponent } from './profesores.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfesoresComponent
  ],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    FormsModule
  ]
})
export class ProfesoresModule { }
