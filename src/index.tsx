import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { simulation, Action } from './simulation';
import { Simulator } from './components/Simulator';


const store = createStore(simulation);
const mountingPoint = document.getElementById('simulator');

ReactDOM.render(<Provider store={store}><Simulator /></Provider>, mountingPoint);

setInterval(() => {
  store.dispatch({ type: Action.AUTONEXT });
}, 100);
