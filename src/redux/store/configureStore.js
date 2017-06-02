/* eslint-disable global-require,no-unused-vars */
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import reducers from '../routes/index';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(
      loggerMiddleware,
    ),
  );
  const store = createStore(reducers, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../routes/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
