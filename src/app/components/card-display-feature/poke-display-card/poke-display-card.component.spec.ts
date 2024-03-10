import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDisplayCardComponent } from './poke-display-card.component';

describe('PokeDisplayCardComponent', () => {
  let component: PokeDisplayCardComponent;
  let fixture: ComponentFixture<PokeDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDisplayCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
