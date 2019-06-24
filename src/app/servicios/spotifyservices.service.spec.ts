import { TestBed } from '@angular/core/testing';

import { SpotifyservicesService } from './spotifyservices.service';

describe('SpotifyservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotifyservicesService = TestBed.get(SpotifyservicesService);
    expect(service).toBeTruthy();
  });
});
