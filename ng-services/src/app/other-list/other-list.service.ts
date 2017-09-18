import { Injectable } from '@angular/core';

@Injectable()
export class OtherListService {
  items = [];

  constructor() {
    this.loadFromStorage();
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.saveToStorage();
  }

  addItem(item) {
    this.items.push(item);
    this.saveToStorage();
  }

  saveToStorage() {
    localStorage.setItem('other-list', JSON.stringify(this.items));
  }

  loadFromStorage() {
    this.items = JSON.parse(localStorage.getItem('other-list') || '[]');
  }
}
