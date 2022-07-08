import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rodada3Component } from './rodada3.component';

describe('Rodada3Component', () => {
  let component: Rodada3Component;
  let fixture: ComponentFixture<Rodada3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rodada3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rodada3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
