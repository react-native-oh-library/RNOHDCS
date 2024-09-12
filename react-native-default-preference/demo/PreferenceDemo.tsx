import React from "react";
import { Text, View } from "react-native";
import DefaultPreference from 'react-native-default-preference';

const App = () => {
    const handleSetItem = useCallback((key: string, value:  string) => {
        RNDefaultPreference.set(key, value)
    }, []);

    const handleGetItem = useCallback((key: string) => {
        RNDefaultPreference?.get(key).then(res => {
            console.log(res)
        });
    }, []);
  return (
      <View>
        <Button onPress={async () => { handleSetItem('key1', 'value1') }} title={'Add item using setItem'}></Button>
        <Button onPress={async () => { handleGetItem('key1') }} title={'Add item using setItem'}></Button>
     </View>
  );
};

export default App;