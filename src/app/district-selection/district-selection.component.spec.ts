import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictSelectionComponent } from './district-selection.component';

describe('DistrictSelectionComponent', () => {
  let component: DistrictSelectionComponent;
  let fixture: ComponentFixture<DistrictSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
