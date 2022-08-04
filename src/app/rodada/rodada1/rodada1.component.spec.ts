import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { Rodada1Component } from './rodada1.component';

describe('Rodada1Component', () => {
  let component: Rodada1Component;
  let fixture: ComponentFixture<Rodada1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rodada1Component ],
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rodada1Component);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
