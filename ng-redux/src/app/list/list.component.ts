import { Observable } from 'rxjs/Observable';
import { IAppState } from './../app.store';
import { AppActions } from './../app.actions';
import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @select() readonly items$: Observable<number[]>;
  filteredItems$: Observable<number[]>;

  constructor(
    private actions: AppActions,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.filteredItems$ = this.items$.map(
      (items) => items.filter(
        item => this.ngRedux.getState().otherItems.indexOf(item) === -1
      )
    );
  }

  add(item: number) {
    this.ngRedux.dispatch(this.actions.add(item));
  }

}
