import React, { useCallback, useState } from 'react';
import { Alert, Button, SafeAreaView, Text } from 'react-native';
import SInfo from 'react-native-sensitive-info';

const SensitiveInfoDemo = () => {
  const handleAddUsingSetItemOnPress = useCallback(() => {
    SInfo.setItem('key1', 'value1', {
      sharedPreferencesName: 'exampleApp',
      keychainService: 'exampleApp',
    }).catch((err) => {
      Alert.alert('Error', err);
    });
  }, []);

  const handleReadingDataWithoutFingerprint = useCallback(async () => {
    try {
      const data = await SInfo.getItem('key1', {
        sharedPreferencesName: 'exampleApp',
        keychainService: 'exampleApp',
      });
      Alert.alert('Data stored:', data);
    } catch (err) {
      Alert.alert('Error', String(err));
    }
  }, []);


  const [logText, setLogText] = useState('');
  async function runTest() {
    const options = {
      sharedPreferencesName: 'exampleAppTest',
      keychainService: 'exampleAppTest',
    };
    let dbgText = '';
    dbgText += `setItem(key1, value1): ${await SInfo.setItem(
      'key1',
      'value1',
      options,
    )}\n`;
    dbgText += `setItem(key2, value2): ${await SInfo.setItem(
      'key2',
      'value2',
      options,
    )}\n`;
    dbgText += `setItem(key3, value3): ${await SInfo.setItem(
      'key3',
      'value3',
      options,
    )}\n`;
    dbgText += `getItem(key2): ${await SInfo.getItem('key2', options)}\n`;
    dbgText += `delItem(key2): ${await SInfo.deleteItem('key2', options)}\n`;
    dbgText += `getAllItems():\n`;
    const allItems = await SInfo.getAllItems(options);
    for (const key in allItems) {
      dbgText += ` - ${key} : ${allItems[key]}\n`;
    }
    setLogText(dbgText);
  }
  runTest();

  return (
    <SafeAreaView style={{ margin: 10 }}>
      <Button
        title="Add item using setItem"
        onPress={handleAddUsingSetItemOnPress}
      />
      <Button
        title="Read data without fingerprint"
        onPress={handleReadingDataWithoutFingerprint}
      />
      <Text>{logText}</Text>
    </SafeAreaView>
  );
};
export default SensitiveInfoDemo;