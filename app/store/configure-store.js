/* @flow */
// import Reactotron from 'reactotron'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import devTools from 'remote-redux-devtools';

const loggerMiddleware = createLogger();

var configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(thunk),
    applyMiddleware(loggerMiddleware),
		// applyMiddleware(Reactotron.reduxMiddleware),
    // devTools({ hostname: 'localhost', port: 8099, name: 'iOS app', filters: { blacklist: ['EFFECT_RESOLVED'] }})
  );
  return createStore(rootReducer, initialState, enhancer);
}
export default configureStore

// const createStoreWithMiddleware = applyMiddleware(
//
//   thunkMiddleware,
//   loggerMiddleware
// )(createStore);
//
// export default function configureStore(initialState: Object = {}): Function {
//   return createStoreWithMiddleware(rootReducer, initialState);
// };
