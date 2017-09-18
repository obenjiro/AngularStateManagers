import { ReadService } from './../services/read.service';
import { WriteService } from './../services/write.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public writeService: WriteService,
    public readService: ReadService
  ) { }

  ngOnInit() {
  }

  add(item: number) {
    this.writeService.addItemCommand(item);
  }

}
