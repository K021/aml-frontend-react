import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import base from './base';
import newInstance from './newInstance';

const history = createHistory();
const middlewares = [thunk, routerMiddleware(history)];

const env = process.env.NODE_ENV;
if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const reducer = history => combineReducers({
  base,
  newInstance,
  router: connectRouter(history),
});

// 다음 처럼 하면 초기값을 지정할 수 있음:
// initialStore => createStore(reducer, initialStore)
// initialStore => createStore(reducer, initialStore || undefined) 되는지 확인하기
const store = initialStore => 
  createStore(reducer(history), applyMiddleware(...middlewares));

export { history };

export default store();
