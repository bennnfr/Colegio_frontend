import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradosRoutingModule } from './grados-routing.module';
import { GradosComponent } from './grados.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GradosComponent
  ],
  imports: [
    CommonModule,
    GradosRoutingModule,
    FormsModule
  ]
})
export class GradosModule { }
