import { Action } from 'redux';
import { AppActions, ItemAction } from './app.actions';

export interface IAppState {
  items: number[];
  otherItems: number[];
}

export const INITIAL_STATE: IAppState = {
  items: [1, 2, 3],
  otherItems: []
};


