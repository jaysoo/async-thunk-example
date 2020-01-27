import {
  counterReducer,
  getCounterStart,
  getCounterFailure,
  getCounterSuccess
} from './counter.slice';

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: '' })).toMatchObject({
      entities: []
    });
  });

  it('should handle get counter actions', () => {
    let state = counterReducer(undefined, getCounterStart());

    expect(state).toEqual({
      loaded: false,
      error: null,
      entities: []
    });

    state = counterReducer(state, getCounterSuccess([{ id: 1 }]));

    expect(state).toEqual({
      loaded: true,
      error: null,
      entities: [{ id: 1 }]
    });

    state = counterReducer(state, getCounterFailure('Uh oh'));

    expect(state).toEqual({
      loaded: true,
      error: 'Uh oh',
      entities: [{ id: 1 }]
    });
  });
});
