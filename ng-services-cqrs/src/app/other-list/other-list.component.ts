import { ReadService } from './../services/read.service';
import { WriteService } from './../services/write.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrls: ['./other-list.component.css']
})
export class OtherListComponent implements OnInit {

  constructor(
    public writeService: WriteService,
    public readService: ReadService
  ) { }

  ngOnInit() {
  }

  remove(item: number) {
    this.writeService.removeItemCommand(item);
  }

}
