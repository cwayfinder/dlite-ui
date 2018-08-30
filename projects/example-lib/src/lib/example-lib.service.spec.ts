import { TestBed, inject } from '@angular/core/testing';

import { ExampleLibService } from './example-lib.service';

describe('ExampleLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExampleLibService],
    });
  });

  it('should be created', inject([ExampleLibService], (service: ExampleLibService) => {
    expect(service).toBeTruthy();
  }));
});
