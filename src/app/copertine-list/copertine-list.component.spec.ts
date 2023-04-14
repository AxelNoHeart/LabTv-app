import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopertineListComponent } from './copertine-list.component';

describe('CopertineListComponent', () => {
  let component: CopertineListComponent;
  let fixture: ComponentFixture<CopertineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopertineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopertineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
