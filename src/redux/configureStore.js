import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import base from './reducer';

const middlewares = [thunk];

const reducer = combineReducers({
  base,
});

// 다음 처럼 하면 초기값을 지정할 수 있음:
// initialStore => createStore(reducer, initialStore)
// initialStore => createStore(reducer, initialStore || undefined) 되는지 확인하기
const store = initialStore => 
  createStore(reducer, applyMiddleware(...middlewares));

export default store();
