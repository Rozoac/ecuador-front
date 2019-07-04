import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeferServicioComponent } from './reefer-servicio.component';

describe('ReeferServicioComponent', () => {
  let component: ReeferServicioComponent;
  let fixture: ComponentFixture<ReeferServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReeferServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReeferServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
