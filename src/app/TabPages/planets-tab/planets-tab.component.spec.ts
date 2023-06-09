import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsTabComponent } from './planets-tab.component';

describe('PlanetsTabComponent', () => {
  let component: PlanetsTabComponent;
  let fixture: ComponentFixture<PlanetsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetsTabComponent]
    });
    fixture = TestBed.createComponent(PlanetsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
