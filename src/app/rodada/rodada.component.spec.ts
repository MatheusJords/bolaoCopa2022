import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { RodadaComponent } from './rodada.component';

describe('RodadaComponent', () => {
  let component: RodadaComponent;
  let fixture: ComponentFixture<RodadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodadaComponent ],
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodadaComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
