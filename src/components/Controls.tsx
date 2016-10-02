import * as React from 'react';
import { connect } from 'react-redux';

import { State } from '../model';


const ControlsComponent = ({ onReset }: any) => {
  return <div>
    <button onClick={ () => onReset() }>Reset</button>
  </div>;
};
export const Controls = connect(
  (state: State) => { return {}; },
  (dispatch: any) => {
    return {
      onReset: () => dispatch({ type: 'reset' }),
    };
  },
)(ControlsComponent);
