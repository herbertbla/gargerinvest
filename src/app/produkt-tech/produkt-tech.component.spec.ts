import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktTechComponent } from './produkt-tech.component';

describe('ProduktTechComponent', () => {
  let component: ProduktTechComponent;
  let fixture: ComponentFixture<ProduktTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
