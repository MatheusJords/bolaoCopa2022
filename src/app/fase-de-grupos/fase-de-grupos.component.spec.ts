import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseDeGruposComponent } from './fase-de-grupos.component';

describe('FaseDeGruposComponent', () => {
  let component: FaseDeGruposComponent;
  let fixture: ComponentFixture<FaseDeGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaseDeGruposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseDeGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
