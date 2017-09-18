import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ReadService {
  constructor(private storageService: StorageService) {
  }

  listQuery() {
    return this.storageService.items.filter(item =>
      this.storageService.otherItems.indexOf(item) === -1
    );
  }

  otherListQuery() {
    return this.storageService.otherItems;
  }
}
