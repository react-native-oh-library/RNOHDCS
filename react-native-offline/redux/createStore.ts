import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  reducer as network,
  createNetworkMiddleware,
} from 'react-native-offline';

import counter from './reducer';
import rootSaga from './sagas';

type GetReducerState<T> = {
  [P in keyof T]: T[P] extends (...args: any[]) => infer Q ? Q : never
};

const reducers = {
  counter,
  network,
};

export type AppState = GetReducerState<typeof reducers>;
export default function createReduxStore({
  withSaga = false,
  queueReleaseThrottle = 1000,
} = {}) {
  //创建网络中间件
  const networkMiddleware = createNetworkMiddleware({
    regexActionType: /^OTHER/, //正则表达式操作类型
    actionTypes: ['ADD_ONE', 'SUB_ONE'],//操作类型
    queueReleaseThrottle, //队列释放限制
  });
  //创建saga中间件
  const sagaMiddleware = createSagaMiddleware();
  //
  const rootReducer = combineReducers(reducers);
  //中间件集合
  const middlewares = [networkMiddleware];
  if (withSaga === true) {
    middlewares.push(sagaMiddleware);
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  if (withSaga === true) {
    sagaMiddleware.run(rootSaga);
  }

  return store;
}
