import * as React from 'react';
import { connect } from 'react-redux';

import { State } from '../model';


const VisualizationComponent = ({ state }: any) => {
  return <div>
    <p>Total population of year {state.year} = {Math.round(state.pyramid.reduce((a: number, b: number) => a + b, 0))}</p>
    <pre>
      {state.pyramid.map((pop: number, age: number) => {
        return age + ' | ' + '.'.repeat(pop / 10) + ' ' + Math.round(pop) + '\n';
      })}
    </pre>
  </div>;
};
export const Visualization = connect(
  (state: State) => { return { state }; },
)(VisualizationComponent);
