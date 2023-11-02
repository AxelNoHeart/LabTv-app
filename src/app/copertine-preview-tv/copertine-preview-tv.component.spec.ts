import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopertinePreviewTvComponent } from './copertine-preview-tv.component';

describe('CopertinePreviewTvComponent', () => {
  let component: CopertinePreviewTvComponent;
  let fixture: ComponentFixture<CopertinePreviewTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopertinePreviewTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopertinePreviewTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
