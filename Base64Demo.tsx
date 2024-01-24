/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import base64 from 'react-native-base64';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';


import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

// import RTNCenteredTextNativeComponent  from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}


function App(): JSX.Element {
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
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        {/* <RTNCenteredTextNativeComponent text="centered text" style={{ width: "100%", height: 30 }} /> */}

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Hello RNOH">
            <Text style={styles.highlight}>Test the base64 library of the react native.</Text>
          </Section>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardView: { margin: 10, backgroundColor: '#f0f0f0', display: 'flex', padding: 10, borderRadius: 8 },
  TextInput: {height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 4, width: '90%'},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
