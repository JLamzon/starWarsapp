import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTabsComponent } from './search-tabs.component';

describe('SearchTabsComponent', () => {
  let component: SearchTabsComponent;
  let fixture: ComponentFixture<SearchTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTabsComponent]
    });
    fixture = TestBed.createComponent(SearchTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
