import * as React from 'react';
import { connect } from 'react-redux';

import { SimState } from '../index';


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
      onReset: () => dispatch({ type: 'reset' }),
      onPlay: () => dispatch({ type: 'play' }),
      onPause: () => dispatch({ type: 'pause' }),
      onStep: () => dispatch({ type: 'next' }),
    };
  },
)(ControlsComponent);
