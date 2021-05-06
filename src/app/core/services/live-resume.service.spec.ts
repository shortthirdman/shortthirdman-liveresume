import { TestBed } from '@angular/core/testing';

import { LiveResumeService } from './live-resume.service';

describe('LiveResumeService', () => {
  let service: LiveResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
