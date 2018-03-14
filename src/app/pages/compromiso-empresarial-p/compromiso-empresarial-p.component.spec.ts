import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromisoEmpresarialPComponent } from './compromiso-empresarial-p.component';

describe('CompromisoEmpresarialPComponent', () => {
  let component: CompromisoEmpresarialPComponent;
  let fixture: ComponentFixture<CompromisoEmpresarialPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompromisoEmpresarialPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompromisoEmpresarialPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
