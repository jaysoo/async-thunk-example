import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import {
  fetchCounter,
  incrementCounter,
  getCounterState
} from '@example/data-access';

const GlobalStyle = createGlobalStyle`
  body {
    font-weight: 100;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  }

  strong {
    font-weight: 600;
  }
`;

const App = () => {
  const counter = useSelector(getCounterState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCounter());
  }, []);
  return (
    <>
      <GlobalStyle />
      <dl></dl>
      <p>
        <strong>Status:</strong> {counter.pending ? 'Pending...' : 'Ready'}
      </p>
      <p>
        <strong>Redux store value:</strong> {counter.value}
      </p>
      <p>
        <strong>API history:</strong> {JSON.stringify(counter.history)}
      </p>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <p>
        <strong>Note:</strong> By chaining promises the responses will always be
        in correct order even if you spam the increment button.
      </p>
    </>
  );
};

export default App;
