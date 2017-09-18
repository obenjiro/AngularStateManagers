import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class StorageService {
  items = [];
  otherItems = [];

  constructor() {
    Observable
      .of([1, 2, 3])
      .delay(2000)
      .subscribe((items) => this.items = items);

    this.loadFromStorage();
  }

  loadFromStorage() {
    this.otherItems = JSON.parse(localStorage.getItem('other-list') || '[]');
  }

  saveToStorage() {
    localStorage.setItem('other-list', JSON.stringify(this.otherItems));
  }
}
