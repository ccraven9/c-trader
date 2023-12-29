import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultMenuComponent } from './search-result-menu.component';

describe('SearchResultMenuComponent', () => {
  let component: SearchResultMenuComponent;
  let fixture: ComponentFixture<SearchResultMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
