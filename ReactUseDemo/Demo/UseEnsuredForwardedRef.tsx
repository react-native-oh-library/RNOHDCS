import React, { useRef } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useEnsuredForwardedRef, useRaf } from 'react-use';

 const UseEnsuredForwardedRefDemo = () => {
  const inoutRef=useRef(null);
  const ensuredInputref=useEnsuredForwardedRef(inoutRef);

  const handleClick=()=>{
    if(ensuredInputref.current){
      ensuredInputref.current.focus()
    }
  }

  return (
    <View>
      <TextInput style={{borderWidth:1}} ref={ensuredInputref}/>
      <Button title='Focus Input' onPress={handleClick} />
    </View>
  );
};
export default UseEnsuredForwardedRefDemo