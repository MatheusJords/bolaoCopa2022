import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartasDeFinalComponent } from './quartas-de-final.component';

describe('QuartasDeFinalComponent', () => {
  let component: QuartasDeFinalComponent;
  let fixture: ComponentFixture<QuartasDeFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartasDeFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartasDeFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
