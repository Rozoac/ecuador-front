import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeferFormComponent } from './reefer-form.component';

describe('ReeferFormComponent', () => {
  let component: ReeferFormComponent;
  let fixture: ComponentFixture<ReeferFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReeferFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReeferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
