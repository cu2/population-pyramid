import * as React from 'react';
import { connect } from 'react-redux';

import { SimState, Action } from '../simulation';


interface ControlsProps {
  isRunning: boolean;
  onReset: Function;
  onPlay: Function;
  onPause: Function;
  onStep: Function;
}

const ControlsComponent = (props: ControlsProps) => {
  return <div>
    <button onClick={ () => props.onReset() }>Reset</button>
    { props.isRunning ? (
      <button onClick={ () => props.onPause() }>Pause</button>
    ) : (
      <span>
        <button onClick={ () => props.onPlay() }>Play</button>
        <button onClick={ () => props.onStep() }>Step</button>
      </span>
    ) }
  </div>;
};
export const Controls = connect(
  (simState: SimState) => {
    return {
      isRunning: simState.isRunning,
    };
  },
  (dispatch: any) => {
    return {
      onReset: () => dispatch({ type: Action.RESET }),
      onPlay: () => dispatch({ type: Action.PLAY }),
      onPause: () => dispatch({ type: Action.PAUSE }),
      onStep: () => dispatch({ type: Action.NEXT }),
    };
  },
)(ControlsComponent);
