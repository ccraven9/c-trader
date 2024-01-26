import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultItemComponent } from './search-result-item.component';
import { PrimengModule } from 'src/app/modules/primeng.module';
import { YUGIOH_CARD_LISTING_MOCK } from 'src/app/testing/mock/yugioh-auction.mock.model';

describe('SearchResultItemComponent', () => {
  let component: SearchResultItemComponent;
  let fixture: ComponentFixture<SearchResultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultItemComponent ],
      imports: [ PrimengModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultItemComponent);
    component = fixture.componentInstance;

    component.listingItem = YUGIOH_CARD_LISTING_MOCK
    fixture.detectChanges();
    
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
