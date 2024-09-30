import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Localize from 'react-native-localization';

// 定义本地化内容
const strings = new Localize({
  en: {//英语
    welcome: 'Welcome',
    question: 'I\'d like some {0} and {1}, or just {0}',
    bread: 'bread',
    butter: 'butter',
    greeting: 'Hello, {0}!   ',
    currentlanguage: 'Current Language',
    availableLanguages: 'Available Languages',
    interfaceLanguage: 'The System Language'
  },
  fr: {//法语
    welcome: 'Bienvenue',
    question: 'Je voudrais un peu de {0} et {1}, ou juste {0}',
    bread: 'pain',
    butter: 'beurre',
    greeting: 'Bonjour, {0}!',
    currentlanguage: 'Langue actuelle',
    availableLanguages: 'Langues disponibles',
    interfaceLanguage: 'Langue du système'
  },
  bo: {//藏语
    welcome: 'བསྐུལ་མཁན།',
    question: 'ང་ལུས་འདི་ལས། {0} དང། {1} ཡང་ཡིན། གང་ཡིན་ནི། {0}',
    bread: 'བཀྲུངས',
    butter: 'བརྡེན',
    greeting: 'བཀའ་བདག་ {0}!',
    currentlanguage: 'ད་དུས་ལག་འཁྱེར།',
    availableLanguages: 'ད་དུས་ལག་འཁྱེར་སྒྲིགས།',
    interfaceLanguage: 'རྩམ་གཞི་སྒྲིག་ལེན་དེ་རྒྱལ་སྤོད་'
  },
  zh: {//中文
    welcome: '欢迎',
    question: '我想要一些{0}和{1}，或者只要{0}',
    bread: '面包',
    butter: '黄油',
    greeting: '你好, {0}!',
    currentlanguage: '当前语言',
    availableLanguages: '当前可用语言列表',
    interfaceLanguage: '当前系统语言'
  },
});

export function LocalizationDemo() {
  // getLanguage API
  const [language, setLanguage] = useState(strings.getLanguage());

  const changeLanguage = (lang: string) => {
    // setLanguage API
    strings.setLanguage(lang);
    setLanguage(strings.getLanguage());
  };

  return (
    <View style={styles.screen}>
      <View style={{ height: 180, justifyContent: 'space-between', marginBottom: 30 }}>
        <Button
          color="#144400"
          title="切换成中文"
          onPress={() => changeLanguage('zh')}
        />
        <Button
          color="#841584"
          title="切换成法语"
          onPress={() => changeLanguage('fr')}
        />
        <Button
          color="#645555"
          title="切换成英语"
          onPress={() => changeLanguage('en')}
        />
        <Button
          color="#241595"
          title="切换成藏语"
          onPress={() => changeLanguage('bo')}
        />
      </View>

      <Text style={styles.text}>
        {strings.welcome}
      </Text>
      <Text style={styles.text}>
        {/* formatString API */}
        {strings.formatString(strings.question, strings.bread, strings.butter)}
      </Text>
      <Text style={styles.text}>
        {strings.currentlanguage}: {language}
      </Text>
      {/* getAvailableLanguages API */}
      <Text style={styles.text}>
        {strings.availableLanguages}: {strings.getAvailableLanguages().join(', ')}
      </Text>
      {/* getInterfaceLanguage API */}
      <Text style={styles.text}>
        {strings.interfaceLanguage}: {strings.getInterfaceLanguage()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white'
  },

  screen: {
    flex: 1,
    padding: 4,
    paddingTop: 10,
    backgroundColor: 'black',
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
});


