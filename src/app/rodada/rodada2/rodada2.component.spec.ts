import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { Rodada2Component } from './rodada2.component';

describe('Rodada2Component', () => {
  let component: Rodada2Component;
  let fixture: ComponentFixture<Rodada2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rodada2Component ],
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rodada2Component);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
