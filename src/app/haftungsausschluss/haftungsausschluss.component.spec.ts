import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HaftungsausschlussComponent } from './haftungsausschluss.component';

describe('HaftungsausschlussComponent', () => {
  let component: HaftungsausschlussComponent;
  let fixture: ComponentFixture<HaftungsausschlussComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HaftungsausschlussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaftungsausschlussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
