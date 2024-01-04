import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileAuctionItemComponent } from './user-profile-auction-item.component';

describe('UserProfileAuctionItemComponent', () => {
  let component: UserProfileAuctionItemComponent;
  let fixture: ComponentFixture<UserProfileAuctionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileAuctionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileAuctionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
