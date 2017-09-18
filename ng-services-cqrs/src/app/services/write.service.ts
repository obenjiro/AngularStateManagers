import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class WriteService {

  constructor(private storage: StorageService) {}

  removeItemCommand(item) {
    this.storage.otherItems.splice(
      this.storage.items.indexOf(item), 1
    );
    if (this.storage.items.indexOf(item) === -1) {
      this.storage.items.push(item);
    }
    this.storage.saveToStorage();
  }

  addItemCommand(item) {
    this.storage.items.splice(
      this.storage.items.indexOf(item), 1
    );
    this.storage.otherItems.push(item);
    this.storage.saveToStorage();
  }
}
