import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsPageComponent } from './search-results-page.component';
import { ComponentsModule } from 'src/app/components/components.module';

describe('SearchResultsPageComponent', () => {
  let component: SearchResultsPageComponent;
  let fixture: ComponentFixture<SearchResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsPageComponent ],
      imports: [ ComponentsModule ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
