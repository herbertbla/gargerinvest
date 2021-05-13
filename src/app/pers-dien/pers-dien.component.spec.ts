import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestGrundComponent } from './ueber-uns.component';

describe('UeberUnsComponent', () => {
  let component: InvestGrundComponent;
  let fixture: ComponentFixture<InvestGrundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestGrundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestGrundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
