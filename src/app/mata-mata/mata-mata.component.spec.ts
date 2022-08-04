import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { MataMataComponent } from './mata-mata.component';

describe('MataMataComponent', () => {
  let component: MataMataComponent;
  let fixture: ComponentFixture<MataMataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MataMataComponent ],
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MataMataComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
