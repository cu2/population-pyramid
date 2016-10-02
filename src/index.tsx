import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { initialState, getNextState } from './model';
import { Simulator } from './components/Simulator';


const model = (state = initialState, action: any) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'next':
      return getNextState(state);
    default:
      return state;
  }
};

const store = createStore(model);
const mountingPoint = document.getElementById('simulator');

ReactDOM.render(<Provider store={store}><Simulator /></Provider>, mountingPoint);

setInterval(() => {
  store.dispatch({type: 'next'});
}, 100);
