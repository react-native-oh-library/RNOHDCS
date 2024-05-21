
import * as Redux from "redux";
import { ReduxLoggerOptions, createLogger} from 'redux-logger'


const loggerConfig :ReduxLoggerOptions = {
  level:'info',
    // predicate: (getState, action) =>  action.type != predicate.type,
    colors:{
      title:(action: any) =>  '#8908ff',
      prevState:(prevState: Object) => '#3716e9',
      action:(action: any) => '#46e313',
      nextState:(state: any) => '#d613e3',
      error:(error: any, prevState: any) => 'red',
    },
    // collapsed: (getState, action) => action.type === collapsed.type,
    stateTransformer(state) {
      return  state
    },
    actionTransformer(action) {
      return action;
    },
}


export const logger:Redux.Middleware = createLogger(loggerConfig)