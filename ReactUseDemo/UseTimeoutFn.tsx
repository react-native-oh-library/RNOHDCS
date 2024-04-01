import {useState,useCallback} from 'react';
import { View, Text,TextInput ,Button } from 'react-native';
import { useTimeoutFn  } from 'react-use';


const Demo = () => {
  const [state, setState] = useState('Not called yet');

    function fn() {
      setState(`called at ${Date.now()}`);
    }

    const [isReady, cancel, reset] = useTimeoutFn(fn, 5000);
    const cancelButtonClick = useCallback(() => {
      if (isReady() === false) {
        cancel();
        setState(`cancelled`);
      } else {
        reset();
        setState('Not called yet');
      }
    }, []);

    const readyState = isReady();

    return (
      <View>
        <Text>{readyState !== null ? 'Function will be called in 5 seconds' : 'Timer cancelled'}</Text>
        <View>
            <Button onPress={cancelButtonClick} title={readyState === false ? 'cancel timeout' : 'restart timeout'}/>
        </View>
        <Text>Function state: {readyState === false ? 'Pending' : readyState ? 'Called' : 'Cancelled'}</Text>
        <Text>{state}</Text>
      </View>
    );
};

export default Demo;