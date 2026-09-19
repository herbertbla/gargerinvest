import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraTechComponent } from './infra-tech.component';

describe('InfraTechComponent', () => {
  let component: InfraTechComponent;
  let fixture: ComponentFixture<InfraTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
