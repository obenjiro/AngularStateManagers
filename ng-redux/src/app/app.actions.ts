import { Injectable } from '@angular/core';
import { Action } from 'redux';

export interface ItemAction extends Action {
  payload: number;
}

@Injectable()
export class AppActions {
  static ADD = 'ADD';
  static REMOVE = 'REMOVE';

  add(item): ItemAction {
    return { type: AppActions.ADD, payload: item };
  }

  remove(item): ItemAction {
    return { type: AppActions.REMOVE, payload: item };
  }
}
