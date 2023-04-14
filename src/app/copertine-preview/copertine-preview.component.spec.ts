import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopertinePreviewComponent } from './copertine-preview.component';

describe('CopertinePreviewComponent', () => {
  let component: CopertinePreviewComponent;
  let fixture: ComponentFixture<CopertinePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopertinePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopertinePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
