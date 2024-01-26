import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCardComponent } from './display-card.component';
import { PrimengModule } from 'src/app/modules/primeng.module';
import { YUGIOH_CARD_LISTING_MOCK } from 'src/app/testing/mock/yugioh-auction.mock.model';

describe('DisplayCardComponent', () => {
  let component: DisplayCardComponent;
  let fixture: ComponentFixture<DisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCardComponent ],
      imports: [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCardComponent);
    component = fixture.componentInstance;
    component.featuredListing = YUGIOH_CARD_LISTING_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
