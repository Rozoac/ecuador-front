import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeferTransporteComponent } from './reefer-transporte.component';

describe('ReeferTransporteComponent', () => {
  let component: ReeferTransporteComponent;
  let fixture: ComponentFixture<ReeferTransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReeferTransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReeferTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
