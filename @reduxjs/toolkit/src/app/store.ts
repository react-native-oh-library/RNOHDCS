import {
  configureStore,
  ThunkAction,
  Action,
  createListenerMiddleware,
  createAction,
  isAnyOf,
  addListener,
  removeListener,
  clearAllListeners,
  createDynamicMiddleware,
  combineSlices,
  createSlice
} from '@reduxjs/toolkit';
import counterReducer, { decrement, counterSliceBooks } from '../features/counter/counterSlice';

function logger({getState, dispatch}) {
  return (next) => {
    return (action) => {
      console.log('toolkit ------  getDefaultMiddleware  logger:' + JSON.stringify(action))
      const returnValue = next(action)
      return returnValue
    }
  }
}

const increment = createAction<number | undefined>('counter/increment')
console.log('toolkit ------ createAction  success')
const listenerMiddleware = createListenerMiddleware()
let temp = Object.keys(listenerMiddleware).length ? 'success' : 'error'
console.log('toolkit ------ createListenerMiddleware' + temp)
const effectFn = (action, listenerApi, name) => {
  console.log('toolkit ------ listenerMiddleware  startListening: ' + name)
  listenerApi.cancelActiveListeners()
}
const effectFnStopListen = (action, listenerApi, name) => {
  console.log('toolkit ------ listenerMiddleware  startListening: ' + name)
  console.log('toolkit ------ listenerMiddleware  StopListen type')
  listenerApi.cancelActiveListeners()
  listenerMiddleware.stopListening({ actionCreator: increment, effect: effectFnactionCreator})
}
const effectFnClearListen = (action, listenerApi, name) => {
  console.log('toolkit ------ listenerMiddleware  startListening: ' + name)
  console.log('toolkit ------ listenerMiddleware  ClearListen All')
  listenerApi.cancelActiveListeners()
  listenerMiddleware.clearListeners()
}


let effectFnactionCreator = (action, listenerApi) => effectFn(action, listenerApi, 'actionCreator')
export let effectFnactionMatcher = (action, listenerApi) => effectFn(action, listenerApi, 'matcher')
let effectFnactionType = (action, listenerApi) => effectFnStopListen(action, listenerApi, 'type')
let effectFnactionPredicate = (action, listenerApi) => effectFnClearListen(action, listenerApi, 'Predicate')

listenerMiddleware.startListening({
  matcher: isAnyOf(increment),
  effect: effectFnactionMatcher
})
listenerMiddleware.startListening({
  actionCreator: increment,
  effect: effectFnactionCreator
})
listenerMiddleware.startListening({
  type: 'counter/increment',
  effect: effectFnactionType
})
listenerMiddleware.startListening({
  predicate: (action) => {
    if (action.type === decrement.type) {
      return true
    }
    return false
  },
  effect: effectFnactionPredicate
})

export let middAddListen = () => {
  console.log('toolkit ------  getDefaultMiddleware  logger:' + JSON.stringify(addListener({
    actionCreator: increment,
    effect: effectFnactionCreator
  })))
  return addListener({
    actionCreator: increment,
    effect: effectFnactionCreator
  })
}

export let middRemoveListen = () => {
  console.log('toolkit ------  getDefaultMiddleware  logger:' + JSON.stringify(removeListener({
    actionCreator: increment,
    effect: effectFnactionCreator
  })))
  return removeListener({
    actionCreator: increment,
    effect: effectFnactionCreator
  })
}

export let middClearsListen = () => {
  console.log('toolkit ------  getDefaultMiddleware  logger:' + JSON.stringify(clearAllListeners()))
  return clearAllListeners()
}

const dynamicMiddleware = createDynamicMiddleware()
dynamicMiddleware.addMiddleware(logger)
dynamicMiddleware.withMiddleware()
console.log('toolkit ------ createDynamicMiddleware: middleware  success')
console.log('toolkit ------ createDynamicMiddleware: addMiddleware  success')
console.log('toolkit ------ createDynamicMiddleware: withMiddleware  success')

const rootReducer = combineSlices().withLazyLoadedSlices()
console.log('toolkit ------ combineSlices: withLazyLoadedSlices  success')

const counterSlice2 = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {}
})

const withCounter = rootReducer.inject(counterSlice2)
const selectCounterValue = (rootState: RootState) => rootState.counter?.value

const warppedSelectCounterValue = withCounter.selector((rootState) => rootState.counter.value,)
console.log('toolkit ------ combineSlices: inject/injectInto  success')
console.log('toolkit ------ combineSlices: selector/selectors  success:' + JSON.stringify(selectCounterValue({ counter: { value: 2 }})))
const aCounterSlice = counterSlice2.injectInto(rootReducer, { reducerPath: 'aCounter' })
console.log('toolkit ------ combineSlices: injectInto  success')

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: counterSliceBooks.reducer
  },
  preloadedState: {
    counter: {
      value: 0,
      status: 'idle',
    }
  },
  enhancers: (getDefaultEnhancers) => {
    console.log('toolkit ------ getDefaultEnhancers: ' + JSON.stringify(getDefaultEnhancers))
    return getDefaultEnhancers()
  },
  middleware: (getDefaultMiddleware) => {
    console.log('toolkit ------ getDefaultMiddleware: ' + JSON.stringify(getDefaultMiddleware()))
    console.log('toolkit ------ getDefaultMiddleware: immutableCheck  success')
    console.log('toolkit ------ getDefaultMiddleware: serializableCheck  success')
    console.log('toolkit ------ getDefaultMiddleware: actionCreatorCheck  success')
    return getDefaultMiddleware(
      {
        immutableCheck: {
          ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],
        },
        serializableCheck: false,
        actionCreatorCheck: false
      }
    ).prepend(listenerMiddleware.middleware).concat(logger)
  },
  devTools: false
});
console.log('toolkit ------ configureStore: reducer  success')
console.log('toolkit ------ configureStore: preloadedState  success')
console.log('toolkit ------ configureStore: enhancers  success')
console.log('toolkit ------ configureStore: middleware  success')
console.log('toolkit ------ configureStore: devTools  success')

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
