import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosgradosComponent } from './alumnosgrados.component';

describe('AlumnosgradosComponent', () => {
  let component: AlumnosgradosComponent;
  let fixture: ComponentFixture<AlumnosgradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosgradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosgradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
