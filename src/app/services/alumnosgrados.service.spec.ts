import { TestBed } from '@angular/core/testing';

import { AlumnosgradosService } from './alumnosgrados.service';

describe('AlumnosgradosService', () => {
  let service: AlumnosgradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosgradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
