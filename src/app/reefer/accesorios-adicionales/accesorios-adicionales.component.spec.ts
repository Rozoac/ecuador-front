import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosAdicionalesComponent } from './accesorios-adicionales.component';

describe('AccesoriosAdicionalesComponent', () => {
  let component: AccesoriosAdicionalesComponent;
  let fixture: ComponentFixture<AccesoriosAdicionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoriosAdicionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoriosAdicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
