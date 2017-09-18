import { ListComponent } from './list/list.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class AppContext {
  items = [];
  otherItems = [];

  listComponent: ListComponent;
  otherListComponent: ListComponent;

  constructor() {
    Observable
      .of([1, 2, 3])
      .delay(2000)
      .subscribe((items) => {
        this.items = items.filter((item) => {
          return this.otherItems.indexOf(item) === -1;
        });
        if (this.listComponent) {
          this.listComponent.items = this.items;
        }
      });

    this.loadFromStorage();
  }

  init(listComponent: ListComponent, otherListComponent: ListComponent) {
    this.listComponent = listComponent;
    this.otherListComponent = otherListComponent;

    this.listComponent.action.subscribe(this.addItem.bind(this));
    this.otherListComponent.action.subscribe(this.removeItem.bind(this));

    this.listComponent.items = this.items;
    this.otherListComponent.items = this.otherItems;
  }

  addItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
    this.otherItems.push(item);
    this.saveToStorage();
  }

  removeItem(item) {
    if (this.items.indexOf(item) === -1) {
      this.items.push(item);
    }
    this.otherItems.splice(this.otherItems.indexOf(item), 1);
    this.saveToStorage();
  }

  saveToStorage() {
    localStorage.setItem('other-list', JSON.stringify(this.otherItems));
  }

  loadFromStorage() {
    this.otherItems = JSON.parse(localStorage.getItem('other-list') || '[]');
  }

}
