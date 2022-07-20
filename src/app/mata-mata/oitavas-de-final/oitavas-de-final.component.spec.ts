import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OitavasDeFinalComponent } from './oitavas-de-final.component';

describe('OitavasDeFinalComponent', () => {
  let component: OitavasDeFinalComponent;
  let fixture: ComponentFixture<OitavasDeFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OitavasDeFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OitavasDeFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
