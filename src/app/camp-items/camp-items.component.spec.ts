import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampItemsComponent } from './camp-items.component';

describe('CampItemsComponent', () => {
  let component: CampItemsComponent;
  let fixture: ComponentFixture<CampItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
