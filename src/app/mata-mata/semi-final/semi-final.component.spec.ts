import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiFinalComponent } from './semi-final.component';

describe('SemiFinalComponent', () => {
  let component: SemiFinalComponent;
  let fixture: ComponentFixture<SemiFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
