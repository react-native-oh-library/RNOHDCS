import React from 'react';
import { View, Text,TextInput ,Button } from 'react-native';
import {useInterval,useToggle} from 'react-use';

const MyComponent = () => {
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
         <Text>delay:</Text><TextInput style={{ height:40,mborderColor:'gray',borderWidth:1}} value={delay}
         onChangeText={text => setDelay(Number(text))} />
        <Text>count: {count}</Text>
        <Text>
          <Button onPress={toggleIsRunning} title={isRunning ? 'stop' : 'start'}/>
        </Text>
      </View>
    );
};

export default MyComponent;