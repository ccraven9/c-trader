import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisplayFeatureComponent } from './card-display-feature.component';
import { PrimengModule } from 'src/app/modules/primeng.module';

describe('CardDisplayFeatureComponent', () => {
  let component: CardDisplayFeatureComponent;
  let fixture: ComponentFixture<CardDisplayFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDisplayFeatureComponent ],
      imports: [ PrimengModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDisplayFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
