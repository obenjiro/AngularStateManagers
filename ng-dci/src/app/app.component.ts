import { ListComponent } from './list/list.component';
import { AppContext } from './app.context';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('list') listComponent: ListComponent;
  @ViewChild('otherList') otherListComponent: ListComponent;

  constructor(private appContext: AppContext) {}

  ngOnInit() {
    this.appContext.init(
      this.listComponent,
      this.otherListComponent
    );
  }
}
