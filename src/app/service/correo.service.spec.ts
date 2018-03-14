import { TestBed, inject } from '@angular/core/testing';

import { CorreoService } from './correo.service';

describe('CorreoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorreoService]
    });
  });

  it('should be created', inject([CorreoService], (service: CorreoService) => {
    expect(service).toBeTruthy();
  }));
});
