import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktHeaderLogoComponent } from './mkt-header-logo.component';

describe('MktHeaderLogoComponent', () => {
  let component: MktHeaderLogoComponent;
  let fixture: ComponentFixture<MktHeaderLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktHeaderLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktHeaderLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
