import { Observable } from 'rxjs/Observable';
import { IAppState } from './../app.store';
import { NgRedux, select } from '@angular-redux/store';
import { AppActions } from './../app.actions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrls: ['./other-list.component.css']
})
export class OtherListComponent implements OnInit {

  @select() readonly otherItems$: Observable<number[]>;

  constructor(
    private actions: AppActions,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
  }

  remove(item: number) {
    this.ngRedux.dispatch(this.actions.remove(item));
  }

}
