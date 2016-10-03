import * as React from 'react';
import { connect } from 'react-redux';

import { SimState } from '../index';
import { State } from '../model';


const pad = (num: number) => {
  const str = num.toString();
  if (str.length < 2) {
    return ' ' + str;
  }
  return str;
};

const getAgeCats = (pyramid: number[]) => {
  let ageCats: number[] = [];
  pyramid.forEach((pop: number, age: number) => {
    const ageCat = Math.floor(age / 5);
    if (ageCats.length <= ageCat) {
      ageCats.push(0);
    }
    ageCats[ageCat] += pop;
  });
  return ageCats;
};

interface VisualizationProps {
  state: State;
}

const VisualizationComponent = ({ state }: VisualizationProps) => {
  const ageCats = getAgeCats(state.pyramid);
  const maxAgeCat = ageCats.length - 1;
  const totalPop = state.pyramid.reduce((a: number, b: number) => a + b, 0);
  return <div>
    <p>Total population of year {state.year} = {Math.round(totalPop)}</p>
    <pre>
      {ageCats.reverse().map((pop: number, revAgeCat: number) => {
        const ageCat = maxAgeCat - revAgeCat;
        return pad(5 * ageCat) + '-' + pad(5 * ageCat + 4) + ' | ' + '='.repeat(pop / 100) + ' ' + Math.round(pop) + '\n';
      })}
    </pre>
  </div>;
};
export const Visualization = connect(
  (simState: SimState) => {
    return {
      state: simState.modelState,
    };
  },
)(VisualizationComponent);
