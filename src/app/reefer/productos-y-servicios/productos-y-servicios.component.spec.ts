import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosYServiciosComponent } from './productos-y-servicios.component';

describe('ProductosYServiciosComponent', () => {
  let component: ProductosYServiciosComponent;
  let fixture: ComponentFixture<ProductosYServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosYServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosYServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
