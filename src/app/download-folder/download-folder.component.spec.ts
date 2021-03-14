import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFolderComponent } from './download-folder.component';

describe('DownloadFolderComponent', () => {
  let component: DownloadFolderComponent;
  let fixture: ComponentFixture<DownloadFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
