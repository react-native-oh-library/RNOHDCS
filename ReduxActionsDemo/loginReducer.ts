import { LOGIN_ACTION } from './loginAction';
import { Action, handleActions as createReducers, combineActions } from 'redux-actions';
import { IAppUser } from './loginType';

const defaultState = {
  // defautl value 不能为null
  appUser: {},
};

export default createReducers(
  {
    // payload 参数名固定，类型推导
    [LOGIN_ACTION.LOGIN]: (state, { payload }: Action<IAppUser>) => {
    console.log('createReducers LOGIN_ACTION.LOGIN',JSON.stringify(payload))  
    return {
      ...state,
      appUser:payload,
    }
  },
    // 异常处理
    [LOGIN_ACTION.LOGOUT]: {
      next(state) {
        console.log('createReducers LOGIN_ACTION.LOGOUT',JSON.stringify({}))  
        return {
          ...state,
          appUser:{}
        };
      },
      throw(state) {
        return state;
      },
    },
    [`${combineActions(LOGIN_ACTION.LOGIN, LOGIN_ACTION.CHANGENAME)}`]: (state, { payload }: Action<IAppUser>) =>{
      console.log("createReducers combineActions", JSON.stringify(state.appUser), 'action'+ JSON.stringify(payload))
      return {
        ...state,
        appUser:payload
      }
    }
  },
  defaultState
);
