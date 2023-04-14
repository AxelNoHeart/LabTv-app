import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopertineDetailsComponent } from './copertine-details.component';

describe('CopertineDetailsComponent', () => {
  let component: CopertineDetailsComponent;
  let fixture: ComponentFixture<CopertineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopertineDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopertineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
