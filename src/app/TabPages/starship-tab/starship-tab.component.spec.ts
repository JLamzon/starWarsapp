import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipTabComponent } from './starship-tab.component';

describe('StarshipTabComponent', () => {
  let component: StarshipTabComponent;
  let fixture: ComponentFixture<StarshipTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarshipTabComponent]
    });
    fixture = TestBed.createComponent(StarshipTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
