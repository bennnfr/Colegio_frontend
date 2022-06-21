import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosgradosComponent } from './alumnosgrados.component';

const routes: Routes = [{ path: '', component: AlumnosgradosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosgradosRoutingModule { }
