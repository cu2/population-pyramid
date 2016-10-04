import { State, initialState, getNextState } from './model';


export enum Action {
    RESET,
    NEXT,
    AUTONEXT,
    PLAY,
    PAUSE,
}

export interface SimState {
  modelState: State;
  isRunning: boolean;
}

const initialSimState: SimState = {
  modelState: initialState,
  isRunning: false,
};

export const simulation = (state = initialSimState, action: any) => {
  switch (action.type) {
    case Action.RESET:
      return Object.assign({}, state, {
        modelState: initialSimState.modelState,
      });
    case Action.NEXT:
      return Object.assign({}, state, {
        modelState: getNextState(state.modelState),
      });
    case Action.AUTONEXT:
      if (state.isRunning) {
        return Object.assign({}, state, {
          modelState: getNextState(state.modelState),
        });
      }
      return state;
    case Action.PLAY:
      return Object.assign({}, state, {
        isRunning: true,
      });
    case Action.PAUSE:
      return Object.assign({}, state, {
        isRunning: false,
      });
    default:
      return state;
  }
};
