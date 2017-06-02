/* eslint-disable global-require,no-unused-vars */
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../routes/index';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__,
});

export default function configureStore() {
  let middleware = [
    thunk,
  ];

  if (__DEV__) {
    // Dev-only middleware
    middleware = [
      ...middleware,
      loggerMiddleware,
    ];
  }

  const enhancer = compose(
    applyMiddleware(...middleware),
  );
  return createStore(reducers, enhancer);
}
