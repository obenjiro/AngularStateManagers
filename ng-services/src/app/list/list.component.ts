import { ListService } from './list.service';
import { Component, OnInit } from '@angular/core';
import { OtherListService } from '../other-list/other-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public listService: ListService,
    public otherListService: OtherListService
  ) { }

  ngOnInit() {
  }

  add(item: number) {
    this.listService.removeItem(item);
    this.otherListService.addItem(item);
  }

}
