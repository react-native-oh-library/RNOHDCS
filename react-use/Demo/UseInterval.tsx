import React from 'react';
import { View, Text,TextInput ,Button } from 'react-native';
import {useInterval,useToggle} from 'react-use';

 const UseIntervalDemo = () => {
    const [count, setCount] = React.useState(0);
    const [delay, setDelay] = React.useState(1000);
    const [isRunning, toggleIsRunning] = useToggle(true);

    useInterval(
      () => {
        setCount(count + 1);
      },
      isRunning ? delay : null
    );

    return (
      <View>
         <Text>delay:</Text>
         <TextInput style={{ height:40, borderColor:'gray',borderWidth:1, fontSize: 16}} 
         onChangeText={text => setDelay(Number(text))} value={delay.toString()}/>
        <Text>count: {count}</Text>
        <Text>
          <Button onPress={toggleIsRunning} title={isRunning ? 'stop' : 'start'}/>
        </Text>
      </View>
    );
};
export default UseIntervalDemo