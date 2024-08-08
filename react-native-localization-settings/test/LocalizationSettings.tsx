import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {
  ReactNativeLanguageDetector,
  getLanguage,
  setLanguage,
} from 'react-native-localization-settings';
import i18next from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

i18next
  .use(ReactNativeLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          key: 'hello',
        },
      },
      zh: {
        translation: {
          key: '你好',
        },
      },
      fr: {
        translation: {
          key: 'hello world in french',
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
  });

export function LocalizationSettings() {
  const {t} = useTranslation();
  const [languages1, setLanguages1] = React.useState('');
  const [languages2, setLanguages2] = React.useState('');
  const [languages3, setLanguages3] = React.useState('');
  return (
    <Tester>
      <TestSuite name="ReactNativeLanguageDetector">
        <TestCase
          tags={['C_API']}
          itShould="ReactNativeLanguageDetector(依赖i18的场景)">
          <Text>{languages1}</Text>
          <Text>{t('key')}</Text>
          <Button
            title={'change to zh---i18'}
            onPress={() => {
              i18next.changeLanguage('zh');
            }}
          />
          <Button
            title={'change to en---i18'}
            onPress={() => {
              i18next.changeLanguage('en-US');
            }}
          />
          <Button
            title={'getLanguage'}
            onPress={() => {
              setLanguages1(getLanguage());
            }}
          />
        </TestCase>
      </TestSuite>
      <TestSuite name="setLanguage">
        <Text style={{backgroundColor: '#fff'}}>当前语言为：{languages2}</Text>
        <TestCase
          tags={['C_API']}
          itShould="setLanguage('zh')"
          initialState={false}
          arrange={({setState, reset}) => (
            <>
              <Button
                title={'setLanguage:zh'}
                onPress={() => {
                  setLanguage('zh');
                  if (getLanguage() == 'zh-Hans') {
                    setState(true);
                  }
                  setLanguages2(getLanguage());
                }}
              />
            </>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase
          tags={['C_API']}
          itShould="setLanguage('en')"
          initialState={false}
          arrange={({setState, reset}) => (
            <View>
              <Button
                title={'setLanguage:en'}
                onPress={() => {
                  setLanguage('en');
                  if (getLanguage() == 'en') {
                    setState(true);
                  }
                  setLanguages2(getLanguage());
                  console.log(getLanguage());     
                }}
              />
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
      </TestSuite>
      <TestSuite name="getLanguage">
        <Text style={{backgroundColor: '#fff'}}>当前语言为：{languages3}</Text>
        <TestCase
          tags={['C_API']}
          itShould="getLanguage()"
          initialState={false}
          arrange={({setState, reset}) => (
            <View>
              <Button
                title={'getLanguage'}
                onPress={() => {
                  if (['zh-Hans', 'en'].includes(getLanguage())) {
                    setState(true);
                  }
                  setLanguages3(getLanguage());
                }}
              />
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
      </TestSuite>
    </Tester>
  );
}

