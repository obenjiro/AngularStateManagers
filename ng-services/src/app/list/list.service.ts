import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ListService {
  items = [];

  constructor() {
    Observable
      .of([1, 2, 3])
      .delay(2000)
      .subscribe((items) => this.items = items);
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  addItem(item) {
    this.items.push(item);
  }

}
