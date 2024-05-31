import React from 'react'
import { Provider } from 'react-redux'
import reducers from './reducers'
import {thunk} from 'redux-thunk'
import { legacy_createStore as createStore,applyMiddleware } from 'redux'
import App from './components/App'

const store = createStore(reducers,applyMiddleware(thunk));

export const TodosExample = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
