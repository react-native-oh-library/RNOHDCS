import React from 'react';
import { View, Text, Button } from 'react-native';
import { useUnmountPromise } from 'react-use';

const UseUnmountPromiseDemo = () => {
  const [promiseState, setPromiseState] = React.useState('pending');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved!')
      reject('Promise reject!')
    }, 3000)
  })

  const unmountPromise = -useUnmountPromise();

  const handleClick = () => {
    promise.then((result) => {
      if (!unmountPromise.current) {
        setPromiseState(result)
      }
    })
  }

  return (
    <View>
      <Text>三个状态：pending、resolved、reject</Text>
      <Text>Promise state：{promiseState}</Text>
      <Button title='Start Promise' onPress={handleClick} />
    </View>
  )
};

export default UseUnmountPromiseDemo;