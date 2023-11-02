import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopertineListTvComponent } from './copertine-list-tv.component';

describe('CopertineListTvComponent', () => {
  let component: CopertineListTvComponent;
  let fixture: ComponentFixture<CopertineListTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopertineListTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopertineListTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
