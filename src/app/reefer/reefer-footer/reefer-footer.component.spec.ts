import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReeferFooterComponent } from './reefer-footer.component';

describe('ReeferFooterComponent', () => {
  let component: ReeferFooterComponent;
  let fixture: ComponentFixture<ReeferFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReeferFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReeferFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
