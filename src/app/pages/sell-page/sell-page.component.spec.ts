import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPageComponent } from './sell-page.component';
import { ComponentsModule } from 'src/app/components/components.module';

describe('SellPageComponent', () => {
  let component: SellPageComponent;
  let fixture: ComponentFixture<SellPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellPageComponent ],
      imports: [ ComponentsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
