import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {AsyncButton} from '../../components/AsyncButton';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
  bookAdded,
  bookRemove,
  booksArr
} from './counterSlice';
import { middAddListen, middClearsListen, middRemoveListen} from '../../app/store'
import {
  isAllOf,
  isAnyOf,
  isAsyncThunkAction,
  isPending,
  isRejected,
  isFulfilled,
  isRejectedWithValue,
  nanoid,
  miniSerializeError,
  createDraftSafeSelector,
  createSelector
} from '@reduxjs/toolkit'

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');

  // The `state` arg is correctly typed as `RootState` already
  const safeSelector = createDraftSafeSelector(state => state, selectCount)
  const selectors = createSelector(state => state, selectCount)
  console.log('toolkit ------ createDraftSafeSelector  success' + JSON.stringify(safeSelector))
  console.log('toolkit ------ createSelector  success:' + JSON.stringify(selectors))

  const count = useAppSelector(selectCount);
  const books = useAppSelector(booksArr);
  const status = useAppSelector(state => state.counter.status);
  const dispatch = useAppDispatch();

  const [matchingText, setMatchingText] = useState('');
  const [otherText, setOtherText] = useState('');

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.value}>{count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <Text style={styles.value}>{incrementAmount}</Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }>
            <Text style={styles.buttonText}>Add Amount</Text>
          </TouchableOpacity>
          <AsyncButton
            style={styles.button}
            disabled={status !== 'idle'}
            onPress={() =>
              dispatch(incrementAsync(Number(incrementAmount) || 0))
            }>
            <Text style={styles.buttonText}>Add Async</Text>
          </AsyncButton>
        </View>
      </View>
      <View style={styles.row}>
        <Text>createEntityAdapter</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(bookAdded({ bookId: 'a', title: 'First' }))}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.value}>{books.ids}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(bookRemove('a'))}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>createListenerMiddleware</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(middAddListen())}>
          <Text style={styles.buttonText}>addListen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(middRemoveListen())}>
          <Text style={styles.buttonText}>removeListen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(middClearsListen())}>
          <Text style={styles.buttonText}>clearListen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>Matching Utilities</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.buttonText}>{matchingText}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setMatchingText(JSON.stringify(isAnyOf(increment)))
            console.log('toolkit ------ isAnyOf', isAnyOf(increment))
          }}>
          <Text style={styles.buttonText2}>isAnyOf</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setMatchingText(JSON.stringify(isAllOf(increment)))
            console.log('toolkit ------ isAllOf', isAllOf(increment))
          }}>
          <Text style={styles.buttonText2}>isAllOf</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setMatchingText(JSON.stringify(isPending(increment)))
            console.log('toolkit ------ isPending false', isPending(increment))
          }}>
          <Text style={styles.buttonText2}>isPending false</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setMatchingText(JSON.stringify(isRejected(increment)))
            console.log('toolkit ------ isRejected false', isRejected(increment))
          }}>
          <Text style={styles.buttonText2}>isRejected false</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setMatchingText(JSON.stringify(isFulfilled(increment)))
            console.log('toolkit ------ isFulfilled false', isFulfilled(increment))
          }}>
          <Text style={styles.buttonText2}>isFulfilled false</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            let a = isPending({ "type": "counter/fetchCount/pending","meta":{"arg":2,"requestId":"1DxfOBGsVp1l_fmjOi3a","requestStatus": "pending"}})
            setMatchingText(JSON.stringify(a))
            console.log('toolkit ------ isPending true', a)
          }}>
          <Text style={styles.buttonText2}>isPending true</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            let a = isRejected({ "type": "counter/fetchCount/rejected","meta":{"arg":2,"requestId":"1DxfOBGsVp1l_fmjOi3b","requestStatus": "rejected"}})
            setMatchingText(JSON.stringify(a))
            console.log('toolkit ------ isRejected true', a)
          }}>
          <Text style={styles.buttonText2}>isRejected true</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            let a = isFulfilled({ "type": "counter/fetchCount/fulfilled","meta":{"arg":2,"requestId":"1DxfOBGsVp1l_fmjOi3c","requestStatus": "fulfilled"}})
            setMatchingText(JSON.stringify(a))
            console.log('toolkit ------ isFulfilled true', a)
          }}>
          <Text style={styles.buttonText2}>isFulfilled true</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setMatchingText(JSON.stringify(isRejectedWithValue(increment)))
            console.log('toolkit ------ isRejectedWithValue', isRejectedWithValue(increment))
          }}>
          <Text style={styles.buttonText2}>isRejectedWithValue false</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            let a = isFulfilled({ "type": "counter/fetchCount/fulfilled","meta":{"arg":2,"requestId":"1DxfOBGsVp1l_fmjOi3r","requestStatus": "fulfilled", "rejectedWithValue": true}})
            setMatchingText(JSON.stringify(a))
            console.log('toolkit ------ isRejectedWithValue true', a)
          }}>
          <Text style={styles.buttonText2}>isRejectedWithValue true</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setMatchingText(JSON.stringify(isAsyncThunkAction(incrementAsync)))
            console.log('toolkit ------ isAsyncThunkAction', isAsyncThunkAction(incrementAsync))
          }}>
          <Text style={styles.buttonText2}>isAsyncThunkAction</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text>Other Exports</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.buttonText}>{otherText}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setOtherText(nanoid())
            console.log('toolkit ------ ', nanoid())
          }}>
          <Text style={styles.buttonText2}>nanoid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setOtherText(JSON.stringify(miniSerializeError('another')))
            console.log('toolkit ------ ', miniSerializeError('another'))
          }}>
          <Text style={styles.buttonText2}>miniSerializeError</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 20
  },
  value: {
    fontSize: 78,
    paddingHorizontal: 16,
    marginTop: 2,
    color: 'rgb(112, 76, 182)',
  },
  button: {
    backgroundColor: 'rgba(112, 76, 182, 0.1)',
    borderRadius: 2,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 4,
    margin: 2,
  },
  buttonText: {
    color: 'rgb(112, 76, 182)',
    fontSize: 32,
    textAlign: 'center',
  },
  buttonText2: {
    color: 'rgb(112, 76, 182)',
    fontSize: 24,
    textAlign: 'center',
  },
  textbox: {
    fontSize: 48,
    padding: 2,
    width: 64,
    textAlign: 'center',
    marginRight: 8,
    borderWidth: 1,
    justifyContent: 'center',
    color: 'rgb(112, 76, 182)',
  },
});
