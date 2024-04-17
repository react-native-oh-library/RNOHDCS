import React from 'react';
import { View, Text,TextInput ,Button } from 'react-native';
import { useTimeout } from 'react-use';

function TestComponent(props:{ms?:number}={}){
    const ms = props.ms || 5000;
    const [isReady, cancel] = useTimeout(ms);
    return (
        <View>
          <Text>
            { isReady() ? 'I\'m reloaded after timeout' : `I will be reloaded after ${ ms / 1000 }s` }
           </Text>
          { isReady() === false ? <Button onPress={ cancel } title='Cancel'/> : <Text>''</Text> }
        </View>
      );
}

 const Demo = () => {
  return (
    <View>
      <TestComponent />
      <TestComponent ms={ 10000 } />
    </View>
  );
};
export default Demo