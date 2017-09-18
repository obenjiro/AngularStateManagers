import { StorageService } from './services/storage.service';
import { WriteService } from './services/write.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { OtherListComponent } from './other-list/other-list.component';
import { ReadService } from './services/read.service';

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
    WriteService,
    ReadService,
    StorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
