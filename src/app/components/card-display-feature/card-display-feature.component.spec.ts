import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisplayFeatureComponent } from './card-display-feature.component';

describe('CardDisplayFeatureComponent', () => {
  let component: CardDisplayFeatureComponent;
  let fixture: ComponentFixture<CardDisplayFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDisplayFeatureComponent ]
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
