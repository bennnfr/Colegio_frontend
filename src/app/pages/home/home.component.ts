import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  navtoalumnos() {
    this.router.navigate(['/alumnos']);
  }
  navtoprofesores() {
    this.router.navigate(['/profesores']);
  }
  navtogrados() {
    this.router.navigate(['/grados']);
  }
  navtoalumnosgrados() {
    this.router.navigate(['/alumnosgrados']);
  }
  
}
