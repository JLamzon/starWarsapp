import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickedSearchComponent } from './clicked-search.component';

describe('ClickedSearchComponent', () => {
  let component: ClickedSearchComponent;
  let fixture: ComponentFixture<ClickedSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickedSearchComponent]
    });
    fixture = TestBed.createComponent(ClickedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
