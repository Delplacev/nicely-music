import { TestBed, inject } from '@angular/core/testing';

import { MusiquesService } from './musiques.service';

describe('MusiquesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusiquesService]
    });
  });

  it('should be created', inject([MusiquesService], (service: MusiquesService) => {
    expect(service).toBeTruthy();
  }));
});
