import { OtherListService } from './other-list/other-list.service';
import { ListService } from './list/list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { OtherListComponent } from './other-list/other-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    OtherListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ListService,
    OtherListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
