import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MataMataService } from './mata-mata.service';

describe('MataMataService', () => {
  let service: MataMataService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports:[RouterTestingModule]
    });
    service = TestBed.inject(MataMataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
