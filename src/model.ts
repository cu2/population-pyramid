export interface State {
  year: number;
  pyramid: number[];
}

const parameters: any = {
  maxAge: 100,
  firstBirth: 20,
  lastBirth: 40,
  birthRate: 0.3,
  deathRate: (age: number) => {
    if (age < 10) {
      return 0.1;
    }
    if (age > 70) {
      return 0.2;
    }
    return 0.04;
  },
};

export const initialState: State = {
  year: 0,
  pyramid: Array.from(Array(parameters.maxAge + 1)).map((_, age) => 1000),
};

export const getNextState = (state: State) => {
  const pyramid = state.pyramid;
  const newKids = pyramid.map((pop, age) => {
    if (age >= parameters.firstBirth && age <= parameters.lastBirth) {
      return parameters.birthRate * pop;
    }
    return 0;
  }).reduce((a, b) => a + b, 0);
  return {
    year: state.year + 1,
    pyramid: [newKids].concat(pyramid.slice(0, -1).map((pop, age) => pop * (1 - parameters.deathRate(age)))),
  };
};
