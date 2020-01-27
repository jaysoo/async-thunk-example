import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { COUNTER_FEATURE_KEY, counterReducer } from '@example/data-access';

const store = configureStore({
  reducer: { [COUNTER_FEATURE_KEY]: counterReducer }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
