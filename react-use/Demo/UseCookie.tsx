import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useCookie } from "react-use";

 const UseCookieDemo = () => {
  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    deleteCookie();
  }, []);

  const updateCookieHandler = () => {
    updateCookie(`my-awesome-cookie-${counter}`);
    setCounter(c => c + 1);
  };

  return (
    <View>
      <Text>Value: {value}</Text>
      <Button title='更新 Cookie' onPress={updateCookieHandler} />
      <Button title='删除 Cookie' onPress={deleteCookie} />
    </View>
  );
};
export default UseCookieDemo