import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarHeaderComponent } from './search-bar-header.component';
import { PrimengModule } from 'src/app/modules/primeng.module';

describe('SearchBarHeaderComponent', () => {
  let component: SearchBarHeaderComponent;
  let fixture: ComponentFixture<SearchBarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarHeaderComponent ],
      imports: [PrimengModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
