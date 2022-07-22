import { TestBed } from '@angular/core/testing';

import { MataMataService } from './mata-mata.service';

describe('MataMataService', () => {
  let service: MataMataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MataMataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
