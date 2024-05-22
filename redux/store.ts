import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './action/counterSlice';
import inputReducer from './action/inputInfoReducer';
import userReducer from './action/UserReducer'

export const store = configureStore({
    reducer: {
      counter: counterReducer,
      input:inputReducer,
      user:userReducer
    },
  });

export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;