import {useState,useCallback} from 'react';
import { View, Text,TextInput ,Button } from 'react-native';
import { useTween  } from 'react-use';


const Demo = () => {
  const t = useTween();
    return (
      <Text>
        Tween: {t}
      </Text>
    );
};

export default Demo;