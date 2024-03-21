import {useState,useCallback} from 'react';
import { View, Text,TextInput ,Button } from 'react-native';
import { useUpdate  } from 'react-use';

const Demo = () => {
  const update = useUpdate();
    return (
      <View>
        <Text>Time: {Date.now()}</Text>
        <Button onPress={update} title='Update' />
      </View>
    );
};

export default Demo;