import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaftungsausschlussComponent } from './haftungsausschluss.component';

describe('HaftungsausschlussComponent', () => {
  let component: HaftungsausschlussComponent;
  let fixture: ComponentFixture<HaftungsausschlussComponent>;

  beforeEach(async(() => {
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
