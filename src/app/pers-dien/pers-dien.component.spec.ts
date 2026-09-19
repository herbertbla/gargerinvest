import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersDienComponent } from './pers-dien.component';

describe('PersDienComponent', () => {
  let component: PersDienComponent;
  let fixture: ComponentFixture<PersDienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersDienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersDienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
