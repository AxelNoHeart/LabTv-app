import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopertineDetailsTvComponent } from './copertine-details-tv.component';

describe('CopertineDetailsTvComponent', () => {
  let component: CopertineDetailsTvComponent;
  let fixture: ComponentFixture<CopertineDetailsTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopertineDetailsTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopertineDetailsTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
