import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const COUNTER_FEATURE_KEY = 'counter';

const fetchApi = () =>
  fetch('/api/counter', { method: 'get' })
    .then(resp => resp.json())
    .then(data => data.value);

const incrementApi = () =>
  fetch('/api/increment', { method: 'post' })
    .then(resp => resp.json())
    .then(data => data.value);

export const fetchCounter = createAsyncThunk('fetch', fetchApi);

export const incrementCounter = createAsyncThunk('increment', incrementApi);

export interface CounterState {
  value: null | number;
  history: number[];
  pending: boolean;
}

export const initialCounterState: CounterState = {
  value: null,
  history: [],
  pending: false
};

export const counterSlice = createSlice({
  name: COUNTER_FEATURE_KEY,
  initialState: initialCounterState as CounterState,
  reducers: {},
  extraReducers: {
    [incrementCounter.pending.type]: state => {
      return { ...state, pending: true };
    },
    [incrementCounter.finished.type]: state => {
      return { ...state, pending: false };
    },
    [fetchCounter.pending.type]: state => {
      return { ...state, pending: true };
    },
    [fetchCounter.finished.type]: state => {
      return { ...state, pending: false };
    },
    [fetchCounter.fulfilled.type]: (state, action) => {
      return {
        ...state,
        value: action.payload.result,
        history: [action.payload.result]
      };
    },
    [incrementCounter.fulfilled.type]: (state, action) => {
      return {
        ...state,
        value: action.payload.result,
        history: state.history.concat([action.payload.result])
      };
    }
  }
});

export const counterReducer = counterSlice.reducer;

export const {} = counterSlice.actions;

export const getCounterState = (rootState: any): CounterState =>
  rootState[COUNTER_FEATURE_KEY];
