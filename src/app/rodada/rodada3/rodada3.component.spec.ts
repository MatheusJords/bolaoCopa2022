import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { Rodada3Component } from './rodada3.component';

describe('Rodada3Component', () => {
  let component: Rodada3Component;
  let fixture: ComponentFixture<Rodada3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rodada3Component ],
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rodada3Component);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
