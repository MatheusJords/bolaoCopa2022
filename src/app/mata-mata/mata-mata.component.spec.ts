import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MataMataComponent } from './mata-mata.component';

describe('MataMataComponent', () => {
  let component: MataMataComponent;
  let fixture: ComponentFixture<MataMataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MataMataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MataMataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
