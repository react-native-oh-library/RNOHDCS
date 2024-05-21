import { IAppUser } from './loginType';
import { createActions } from 'redux-actions';

export const LOGIN_ACTION = {
  LOGIN: 'login',
  LOGOUT: 'logout',
  CHANGENAME:'changName'
};

export default createActions({
  [LOGIN_ACTION.LOGIN]: (appUser: IAppUser) => appUser,
  [LOGIN_ACTION.LOGOUT]: () => null,
  [LOGIN_ACTION.CHANGENAME]:(appUser: IAppUser) => appUser,
});
