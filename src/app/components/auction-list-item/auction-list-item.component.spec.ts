import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionListItemComponent } from './auction-list-item.component';
import { MessageService } from 'primeng/api';
import { PrimengModule } from 'src/app/modules/primeng.module';

describe('AuctionListItemComponent', () => {
  let component: AuctionListItemComponent;
  let fixture: ComponentFixture<AuctionListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionListItemComponent ],
      imports: [ PrimengModule ],
      providers: [ MessageService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
