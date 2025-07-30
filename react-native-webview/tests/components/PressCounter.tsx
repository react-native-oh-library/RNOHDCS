import {useState} from 'react';
import {Button} from 'react-native';

export function PressCounter() {
  const [counter, setCounter] = useState(0);
  return (
    <Button
      title={`Click (${counter})`}
      onPress={() => {
        setCounter(prev => prev + 1);
      }}
    />
  );
}
