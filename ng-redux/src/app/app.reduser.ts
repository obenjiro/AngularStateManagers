import { IAppState } from './app.store';
import { AppActions, ItemAction } from './app.actions';

export function appReducer(lastState: IAppState, action: ItemAction): IAppState {
  switch (action.type) {
    case AppActions.ADD:
      return {
        otherItems: lastState.otherItems.concat([action.payload]),
        items: lastState.items.filter(item => item !== action.payload)
      };
    case AppActions.REMOVE:
      return {
        items: lastState.items.concat([action.payload]),
        otherItems: lastState.otherItems.filter(item => item !== action.payload)
      };
  }

  // We don't care about any other actions right now.
  return lastState;
}
