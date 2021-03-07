import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiFooterComponent } from './gi-footer.component';

describe('GiFooterComponent', () => {
  let component: GiFooterComponent;
  let fixture: ComponentFixture<GiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
