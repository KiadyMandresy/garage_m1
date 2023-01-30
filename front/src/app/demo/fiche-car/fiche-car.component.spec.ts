import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheCarComponent } from './fiche-car.component';

describe('FicheCarComponent', () => {
  let component: FicheCarComponent;
  let fixture: ComponentFixture<FicheCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
