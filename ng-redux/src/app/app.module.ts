import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { OtherListComponent } from './other-list/other-list.component';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';

import { IAppState, INITIAL_STATE } from './app.store';
import { AppActions } from './app.actions';
import { appReducer } from './app.reduser';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    OtherListComponent
  ],
  imports: [
    BrowserModule, NgReduxModule
  ],
  providers: [
    AppActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(
      appReducer,
      INITIAL_STATE,
      [ createLogger() ]
    );
  }
}
