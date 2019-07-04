import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeferContactoComponent } from './reefer-contacto.component';

describe('ReeferContactoComponent', () => {
  let component: ReeferContactoComponent;
  let fixture: ComponentFixture<ReeferContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReeferContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReeferContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
