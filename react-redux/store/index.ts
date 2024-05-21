import { configureStore, combineReducers } from '@reduxjs/toolkit'

import productReducer from './product';
import commentsReducer from './comments';
import uiControlReducer from './uiControl';
import shoppingCartReducer from './shoppingCart';


const reducers = combineReducers({
  products: productReducer,
  comments: commentsReducer,
  uiControl: uiControlReducer,
  shoppingCart: shoppingCartReducer
});

const rootStore = configureStore({
  reducer: reducers,
});

export type AppStore = typeof rootStore;

export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch

export default rootStore;
