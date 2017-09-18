import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() items;
  @Input() name: string;
  @Output() action = new EventEmitter<number>();

  constructor() { }

  onAction(item: number) {
    this.action.emit(item);
  }

}
