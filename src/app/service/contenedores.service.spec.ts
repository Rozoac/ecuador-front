import { TestBed, inject } from '@angular/core/testing';

import { ContenedoresService } from './contenedores.service';

describe('ContenedoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContenedoresService]
    });
  });

  it('should be created', inject([ContenedoresService], (service: ContenedoresService) => {
    expect(service).toBeTruthy();
  }));
});
