import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useStateList } from 'react-use';
const stateSet = ['first', 'second', 'third', 'fourth', 'fifth'];

 const UseStateListDemo = () => {
  const { state, prev, next, setStateAt, setState, currentIndex, isFirst, isLast } = useStateList(stateSet);
  const [inp1, setInp1] :any= useState();

  return (
    <View>
      <Text>
        {state} [index: {currentIndex}], [isFirst: {isFirst ? 'true' : 'false'}], [isLast: {isLast ? 'true' : 'false'}]
      </Text>
      <Text style={{ margin: 1 }}></Text>
      <Button title='上一个' onPress={() => prev()} />
      <Text style={{ margin: 1 }}></Text>
      <Button title='下一个' onPress={() => next()} />
      <TextInput value={inp1} onChangeText={(value) => setInp1(parseInt(value))} style={{ borderWidth: 1, margin: 5 }} />
      <Button title='通过索引设置（0-4）' onPress={() => setStateAt(inp1)} />
    </View>
  );
};
export default UseStateListDemo