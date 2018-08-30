import { TestBed, inject } from '@angular/core/testing';

import { BazService } from './baz.service';

describe('BazService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BazService],
    });
  });

  it('should be created', inject([BazService], (service: BazService) => {
    expect(service).toBeTruthy();
  }));
});
