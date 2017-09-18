import { OtherListService } from './other-list.service';
import { Component, OnInit } from '@angular/core';
import { ListService } from '../list/list.service';

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrls: ['./other-list.component.css']
})
export class OtherListComponent implements OnInit {

  constructor(
    public listService: ListService,
    public otherListService: OtherListService
  ) { }

  ngOnInit() {
  }

  remove(item: number) {
    this.otherListService.removeItem(item);
    this.listService.addItem(item);
  }

}
