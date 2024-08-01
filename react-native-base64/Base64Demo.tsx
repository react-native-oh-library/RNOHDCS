import React, { useState } from 'react';
import base64 from 'react-native-base64';
import {
   ScrollView,
   StyleSheet,
   Text,
   TextInput,
   useColorScheme,
   View,
} from 'react-native';
import {
   Colors,
} from 'react-native/Libraries/NewAppScreen';

export function Base64Page(): JSX.Element {
   const isDarkMode = useColorScheme() === 'dark';

   // 输入文字
   const [word, setWord] = useState('react native');
   // 编码输入文字
   const encodeWord = base64.encode(word);
   // 解码输入文字
   const decodeWord = base64.decode(encodeWord);
   // 解码结果 是否 和原文字相同
   const wordEqualDecodeWord = `word equal decode word: ${word === decodeWord}`
   // 将word 转为 unit8 array
   const byteArrayWord = Uint8Array.from(word.split(''), w => w.charCodeAt(0));
   // 对 unit 8 array 进行编码
   const encodeWordFromByteArray = base64.encodeFromByteArray(byteArrayWord);
   // 对 上一步结果进行解码
   const decodeFromByteArray = base64.decode(encodeWordFromByteArray);

   const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

  return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white, }}>
          <View style={styles.cardView}>
            <Text>Test Word: </Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={setWord}
              value={word}
            ></TextInput>
            <Text style={{marginTop: 12}}>encode Result: <Text style={{color: 'orange'}}>{encodeWord}</Text></Text>
            <Text style={{marginTop: 12}}>decode Result: <Text style={{color: 'orange'}}>{decodeWord}</Text></Text>
            <Text style={{marginTop: 12}}>encodeFromByteArray Result: <Text style={{color: 'orange'}}>{encodeWordFromByteArray}</Text></Text>
            <Text style={{marginTop: 12}}>decode the value above Result: <Text style={{color: 'orange'}}>{decodeFromByteArray}</Text></Text>
          </View>
        </View>
      </ScrollView>
  );

}

const styles = StyleSheet.create({
   cardView: { margin: 10, backgroundColor: '#f0f0f0', display: 'flex', padding: 10, borderRadius: 8 },
   TextInput: {height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 4, width: '90%'},
   highlight: {
      fontWeight: '700',
   },
});