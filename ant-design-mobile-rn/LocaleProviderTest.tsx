import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  DatePicker,
  List,
  Pagination,
  Picker,
  Button,
  SearchBar,
  WhiteSpace,
  Provider,
} from '@ant-design/react-native';
import enUS from './locale/en_US';
import zhCN from './locale/zh_CN';
import { ThemeProvider } from './theme';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="LocaleProviderTest">
      <TestCase itShould="render a LocaleProvider Locale" tags={['C_API']}>
        <LocaleProviderExample />
      </TestCase>
      <TestCase itShould="render a LocaleProvider Theme" tags={['C_API']}>
        <LocaleProviderThemeExample />
      </TestCase>
    </TestSuite>
  );
};
const maxDate = new Date(2018, 11, 3, 22, 0)
const minDate = new Date(2015, 7, 6, 8, 30)

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
]

const Page = React.memo(() => (
  <View>
    <Pagination total={5} current={1} />
    <WhiteSpace />
    <List style={{ backgroundColor: 'white' }}>
      <DatePicker
        title="Select date"
        minDate={minDate}
        maxDate={maxDate}>
        <List.Item arrow="horizontal">DatePicker</List.Item>
      </DatePicker>
      <Picker data={seasons} cascade={false}>
        <List.Item arrow="horizontal">Picker</List.Item>
      </Picker>
      <WhiteSpace />
      <SearchBar placeholder="Search" showCancelButton />
    </List>
  </View>
))

const LocaleProviderExample = () => {
  const languages = [
    {
      value: '中国',
      label: '中国',
      language: zhCN,
    },
    {
      value: 'English',
      label: 'English',
      language: enUS,
    },
  ];
  const [locale, setLocale] = useState<any>('中国');
  const [currentLocale, setCurrentLocale] = useState<any>(languages.find((item) => item.value === locale)?.language);
  const handleClick = () => {
    setLocale(locale === '中国' ? 'English' : '中国');
  };

  React.useEffect(() => {
    setCurrentLocale(languages.find((item) => item.value === locale)?.language);
  }, [locale]);

  return (
    <View>
      <Button type="primary" style={{ marginBottom: 10 }} onPress={handleClick}>{locale === 'English' ? 'change to chinese' : '切换到英文'}</Button>
      <WhiteSpace />
      <Provider locale={currentLocale}>
        <Page />
      </Provider>
    </View>
  )
}

const LocaleProviderThemeExample = () => {
  const darkTheme = {
    fill_base: 'pink',
  };
  const lightTheme = {
    fill_base: '#1890ff',
  };
  const [theme, setTheme] = useState(lightTheme)
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  useEffect(() => {
    setTheme(() => isDarkMode ? darkTheme : lightTheme);
  }, [isDarkMode]);

  return (
    <View>
      <Button type="primary" onPress={() => { toggleTheme() }}>{'切换主题'}</Button>
      <WhiteSpace />
      <ThemeProvider value={theme}>
        <Provider theme={theme}>
          <Page />
        </Provider>
      </ThemeProvider>
    </View>
  )
}


