import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
                        { path: 'alumnos', loadChildren: () => import('./pages/alumnos/alumnos.module').then(m => m.AlumnosModule) },
                        { path: 'profesores', loadChildren: () => import('./pages/profesores/profesores.module').then(m => m.ProfesoresModule) },
                        { path: 'grados', loadChildren: () => import('./pages/grados/grados.module').then(m => m.GradosModule) },
                        { path: 'alumnosgrados', loadChildren: () => import('./pages/alumnosgrados/alumnosgrados.module').then(m => m.AlumnosgradosModule) },
                        { path: '**', redirectTo: 'home' }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
