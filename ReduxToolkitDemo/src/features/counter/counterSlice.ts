import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  prepareAutoBatched,
  createEntityAdapter,
  autoBatchEnhancer
} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

export function fetchCount(currentCount = 0, amount = 1) {
  return new Promise<{data: number}>(resolve =>
    setTimeout(() => resolve({data: currentCount + amount}), 1000),
  );
}

interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = createAsyncThunk<
  number,
  number,
  {state: {counter: CounterState}}
>('counter/fetchCount', async (amount: number, {getState}) => {
  const {value} = getState().counter;
  const response = await fetchCount(value, amount);
  return response.data;
});
console.log('toolkit ------ createAsyncThunk  success')

function isActionWithNumberPayload(action){
  return typeof action.payload === 'number'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    clearAll: {
      reducer(state, action: PayloadAction) {
        state.status = 'failed'
      },
      prepare: prepareAutoBatched(),
    },
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        console.log('toolkit ------ createReducer: addCase  success')
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addMatcher(isActionWithNumberPayload, (state, action) => {
        console.log('toolkit ------ createReducer: addMatcher  success')
      })
      .addDefaultCase((state, action) => {
        console.log('toolkit ------ createReducer: addDefaultCase  success')
      })
  },
  reducerPath: 'counter',
  selectors: {}
});

console.log('toolkit ------ createSlice: name  success')
console.log('toolkit ------ createSlice: initialState  success')
console.log('toolkit ------ createSlice: reducers  success')
console.log('toolkit ------ createSlice: extraReducers  success')
console.log('toolkit ------ createSlice: reducerPath  success')
console.log('toolkit ------ createSlice: selectors  success')

type Book = { bookId: string; title: string }
const booksAdapter = createEntityAdapter({
  selectId: (book: Book) => book.bookId,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
})
export const counterSliceBooks = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState(),
  reducers: {
    bookAdded: booksAdapter.addOne,
    bookRemove: booksAdapter.removeOne
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export const {bookAdded, bookRemove} = counterSliceBooks.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;
export const booksArr = (state: RootState) => state.books;

export default counterSlice.reducer;
