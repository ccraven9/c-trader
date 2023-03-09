import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuBarComponent } from './sub-menu-bar.component';

describe('SubMenuBarComponent', () => {
  let component: SubMenuBarComponent;
  let fixture: ComponentFixture<SubMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
