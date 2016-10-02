import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { State, initialState, getNextState } from './model';
import { Simulator } from './components/Simulator';


export interface SimState {
  modelState: State;
  isRunning: boolean;
}

const initialSimState: SimState = {
  modelState: initialState,
  isRunning: false,
};

const model = (state = initialSimState, action: any) => {
  switch (action.type) {
    case 'reset':
      return Object.assign({}, state, {
        modelState: initialSimState.modelState,
      });
    case 'next':
      return Object.assign({}, state, {
        modelState: getNextState(state.modelState),
      });
    case 'autonext':
      if (state.isRunning) {
        return Object.assign({}, state, {
          modelState: getNextState(state.modelState),
        });
      }
      return state;
    case 'play':
      return Object.assign({}, state, {
        isRunning: true,
      });
    case 'pause':
      return Object.assign({}, state, {
        isRunning: false,
      });
    default:
      return state;
  }
};

const store = createStore(model);
const mountingPoint = document.getElementById('simulator');

ReactDOM.render(<Provider store={store}><Simulator /></Provider>, mountingPoint);

setInterval(() => {
  store.dispatch({type: 'autonext'});
}, 100);
