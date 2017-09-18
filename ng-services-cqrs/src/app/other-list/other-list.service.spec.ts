/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OtherListService } from './other-list.service';

describe('Service: OtherList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtherListService]
    });
  });

  it('should ...', inject([OtherListService], (service: OtherListService) => {
    expect(service).toBeTruthy();
  }));
});