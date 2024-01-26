import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisplayFeatureComponent } from './card-display-feature.component';
import { PrimengModule } from 'src/app/modules/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '../components.module';

describe('CardDisplayFeatureComponent', () => {
  let component: CardDisplayFeatureComponent;
  let fixture: ComponentFixture<CardDisplayFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDisplayFeatureComponent ],
      imports: [ PrimengModule, BrowserAnimationsModule, ComponentsModule ]
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
