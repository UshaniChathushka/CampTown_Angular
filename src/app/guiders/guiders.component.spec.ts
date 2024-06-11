import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidersComponent } from './guiders.component';

describe('GuidersComponent', () => {
  let component: GuidersComponent;
  let fixture: ComponentFixture<GuidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
