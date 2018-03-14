import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPrincipalComponent } from './slider-principal.component';

describe('SliderPrincipalComponent', () => {
  let component: SliderPrincipalComponent;
  let fixture: ComponentFixture<SliderPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
