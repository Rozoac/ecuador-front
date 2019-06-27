import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoFuncionaUnReeferComponent } from './como-funciona-un-reefer.component';

describe('ComoFuncionaUnReeferComponent', () => {
  let component: ComoFuncionaUnReeferComponent;
  let fixture: ComponentFixture<ComoFuncionaUnReeferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoFuncionaUnReeferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoFuncionaUnReeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
