/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, Button} from 'react-native';
import KasvCom from './src';
function App(): JSX.Element {
  const [flag, setFlag] = useState<boolean>(false);
  const childSetFlag = () => {
    setFlag(!flag);
  };
  return (
    <SafeAreaView style={{opacity: 1}}>
      {!flag && (
        <Button
          title="KeyBoardAwareScrollView"
          onPress={() => {
            setFlag(!flag);
          }}
        />
      )}
      {flag && <KasvCom flag={flag} changeFlag={childSetFlag} />}
    </SafeAreaView>
  );
}
export default App;
