import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createTransform,
} from 'redux-persist';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { cartTransform } from './cartTransform'; 

import productReducer from './product';
import commentsReducer from './comments';
import uiControlReducer from './uiControl';
import shoppingCartReducer from './shoppingCart';

// 持久化配置
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // 如下配置为不持久化 评论数据
  blacklist: [ 'comments', 'shoppingCart' ],
  // 持久化的 reducer
  // whitelist: [ 'products', 'uiControl', 'shoppingCart']
  // debug: false,
  // throttle: 50,
  // keyPrefix: '',
  // serialize: false
}

const cartPersistConfig = {
  key: 'cart',
  storage: AsyncStorage,
  transforms: [ cartTransform ]
}

const reducers = combineReducers({
  products: productReducer,           // 商品
  comments: commentsReducer,          // 商品评论
  uiControl: uiControlReducer,        // 页面跳转配置
  shoppingCart: persistReducer(cartPersistConfig, shoppingCartReducer)   // 购物车数据
});


const rootStore = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE]
      }
  }),
});

export type AppStore = typeof rootStore;

export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch

export const persistRootStore= persistStore(rootStore);

export default rootStore;
