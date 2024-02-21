import { legacy_createStore as createStore, combineReducers } from 'redux';
import loginReducer from './loginReducer';

export const rootReducer = combineReducers({
  login: loginReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
