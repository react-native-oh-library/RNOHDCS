import { TestCase, TestSuite, Tester } from '@rnoh/testerino';
import React, { useState } from 'react';
import {
  Button,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
  CountryModalProvider,
  DARK_THEME,
} from 'react-native-country-picker-modal';

const Demo = (props: any) => {
  const { children, ...rest } = props;
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [country, setCountry] = useState<Country>();
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <View style={styles.box}>
      <CountryPicker
        countryCode={countryCode}
        onSelect={onSelect}
        containerButtonStyle={styles.containerButtonStyle}
        withFilter
        {...rest}
      />
      {children}
      {country !== null && (
        <Text style={styles.data}>{JSON.stringify(country, null, 0)}</Text>
      )}
    </View>
  );
};
const Demo2 = () => {
  return <Demo subregion="Southern Asia" />;
};

const Demo3 = () => {
  return <Demo countryCodes={['AF']} />;
};
const Demo4 = () => {
  return <Demo theme={DARK_THEME} />;
};

const Demo5 = () => {
  return <Demo translation="common" />;
};

const Demo6 = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const switchVisible = () => setVisible(!visible);
  return (
    <>
      <Demo
        modalProps={{ visible }}
        onOpen={() => setVisible(true)}
        onClose={() => setVisible(false)}>
        <Button title={'open or close modal'} onPress={switchVisible} />
      </Demo>
    </>
  );
};
const Demo7 = () => {
  return <Demo filterProps={{ placeholder: '请选择国家/地区' }} />;
};

const Demo8 = () => {
  const RenderEmpty = () => {
    return (
      <View>
        <Text>List Empty!</Text>
      </View>
    );
  };
  return (
    <Demo
      flatListProps={{
        ListEmptyComponent: <RenderEmpty />,
      }}
    />
  );
};
const Demo9 = () => {
  return <Demo withAlphaFilter />;
};
const Demo10 = () => {
  return <Demo withAlphaFilter={false} />;
};
const Demo11 = () => {
  return <Demo withCallingCode={true} />;
};
const Demo12 = () => {
  return <Demo withCallingCode={false} />;
};
const Demo13 = () => {
  return <Demo withCurrency={true} />;
};
const Demo14 = () => {
  return <Demo withCurrency={false} />;
};
const Demo15 = () => {
  return <Demo withEmoji={true} />;
};
const Demo16 = () => {
  return <Demo withEmoji={false} />;
};
const Demo17 = () => {
  return <Demo withCountryNameButton={true} />;
};
const Demo18 = () => {
  return <Demo withCountryNameButton={false} />;
};
const Demo19 = () => {
  return <Demo withCurrencyButton={true} />;
};
const Demo20 = () => {
  return <Demo withCurrencyButton={false} />;
};
const Demo21 = () => {
  return <Demo withCallingCodeButton={true} />;
};
const Demo22 = () => {
  return <Demo withCallingCodeButton={false} />;
};

const Demo23 = () => {
  return <Demo withFlagButton={true} />;
};
const Demo24 = () => {
  return <Demo withFlagButton={false} />;
};
const Demo25 = () => {
  return <Demo withCloseButton />;
};
const Demo26 = () => {
  return <Demo withCloseButton={false} />;
};
const Demo27 = () => {
  return <Demo withFilter />;
};
const Demo28 = () => {
  return <Demo withFilter={false} />;
};
const Demo29 = () => {
  return <Demo withFlag />;
};
const Demo30 = () => {
  return <Demo withFlag={false} />;
};
const Demo31 = () => {
  return <Demo containerButtonStyle={{ backgroundColor: 'pink' }} />;
};
const Demo32 = () => {
  return (
    <Demo
      renderFlagButton={(props: any) => (
        <Button title="自定义按钮" {...props} />
      )}
    />
  );
};
const Demo33 = () => {
  return (
    <Demo
      renderCountryFilter={(props: any) => (
        <TextInput {...props} placeholder="自定义搜索过滤" />
      )}
    />
  );
};
const Demo34 = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const switchVisible = () => setVisible(!visible);
  return (
    <>
      <Demo
        modalProps={{ visible }}
        onClose={() => setVisible(false)}
        onOpen={() => setVisible(true)}
      />
      <Button
        title={'Open modal from outside using visible props'}
        onPress={switchVisible}
      />
    </>
  );
};
const Demo35 = () => {
  return (
    <CountryModalProvider>
      <Demo disableNativeModal />
    </CountryModalProvider>
  );
};
const Demo36 = () => {
  return (
    <CountryModalProvider>
      <Demo disableNativeModal={false} />
    </CountryModalProvider>
  );
};
const Demo37 = () => {
  return (
    <CountryModalProvider>
      <Demo preferredCountries={['AF']} />
    </CountryModalProvider>
  );
};

const Demo38 = () => {
  return <Demo withModal={false} />;
};

export const CountryPickerTest = () => {
  return (
    <ScrollView>
      <Tester>
        <TestSuite name="region">
          <TestCase itShould="区域：region = Africa">
            <Demo />
          </TestCase>
        </TestSuite>
        <TestSuite name="subregion">
          <TestCase itShould="次区域subregion = Southern Asia">
            <Demo2 />
          </TestCase>
        </TestSuite>
        <TestSuite name="countryCodes">
          <TestCase itShould="countryCodes = AF">
            <Demo3 />
          </TestCase>
        </TestSuite>
        <TestSuite name="theme">
          <TestCase itShould="With dark theme">
            <Demo4 />
          </TestCase>
        </TestSuite>
        <TestSuite name="translation">
          <TestCase itShould="translation = common">
            <Demo5 />
          </TestCase>
        </TestSuite>
        <TestSuite name="modalProps">
          <TestCase itShould="通过按钮控制modal的开启和关闭">
            <Demo6 />
          </TestCase>
        </TestSuite>
        <TestSuite name="filterProps">
          <TestCase itShould="搜索框props,例如：placeholder: '请选择国家/地区'">
            <Demo7 />
          </TestCase>
        </TestSuite>
        <TestSuite name="flatListProps">
          <TestCase itShould="flatListProps">
            <Demo8 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withAlphaFilter：是否展示索引">
          <TestCase itShould="展示索引">
            <Demo9 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withAlphaFilter：是否展示索引">
          <TestCase itShould="不展示索引">
            <Demo10 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withCallingCode">
          <TestCase itShould="withCallingCode =true">
            <Demo11 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withCallingCode：是否带调用代码">
          <TestCase itShould="withCallingCode =false">
            <Demo12 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withCurrency：是否带currency">
          <TestCase itShould="withCurrency =true">
            <Demo13 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withCurrency：是否带currency">
          <TestCase itShould="withCurrency =false">
            <Demo14 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withEmoji：是否带emoji">
          <TestCase itShould="是">
            <Demo15 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withEmoji：是否带emoji">
          <TestCase itShould="否">
            <Demo16 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withCountryNameButton：是否带国家/地区按钮">
          <TestCase itShould="withCountryNameButton =true">
            <Demo17 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withCountryNameButton：是否带国家/地区按钮">
          <TestCase itShould="withCountryNameButton =false">
            <Demo18 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withCurrencyButton：是否带货币按钮">
          <TestCase itShould="withCurrencyButton =true">
            <Demo19 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withCurrencyButton：是否带货币按钮">
          <TestCase itShould="withCurrencyButton =true">
            <Demo20 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withCallingCodeButton:是否使用带CallingCode按钮">
          <TestCase itShould="withCallingCodeButton =true">
            <Demo21 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withCallingCodeButton:是否使用带CallingCode按钮">
          <TestCase itShould="withCallingCodeButton =false">
            <Demo22 />
          </TestCase>
        </TestSuite>

        <TestSuite name="withFlagButton:是否使用带flag按钮">
          <TestCase itShould="withFlagButton =true">
            <Demo23 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withFlagButton:是否使用带flag按钮">
          <TestCase itShould="withFlagButton =false">
            <Demo24 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withCloseButton:是否使用关闭按钮">
          <TestCase itShould="withCloseButton =true">
            <Demo25 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withCloseButton:是否使用关闭按钮">
          <TestCase itShould="withCloseButton =false">
            <Demo26 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withFilter:是否启用过滤搜索功能">
          <TestCase itShould="withFilter =true">
            <Demo27 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withFilter:是否启用过滤搜索功能">
          <TestCase itShould="withFilter =false">
            <Demo28 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withFlag:是否带flag功能">
          <TestCase itShould="withFlag =true">
            <Demo29 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withFlag:是否带flag功能">
          <TestCase itShould="withFlag =false">
            <Demo30 />
          </TestCase>
        </TestSuite>
        <TestSuite name="containerButtonStyle">
          <TestCase itShould="containerButton样式">
            <Demo31 />
          </TestCase>
        </TestSuite>
        <TestSuite name="renderFlagButton">
          <TestCase itShould="自定义按钮">
            <Demo32 />
          </TestCase>
        </TestSuite>
        <TestSuite name="renderCountryFilter">
          <TestCase itShould="自定义搜索过滤">
            <Demo33 />
          </TestCase>
        </TestSuite>
        <TestSuite name="onOpen onClose ">
          <TestCase itShould="">
            <Demo34 />
          </TestCase>
        </TestSuite>
        <TestSuite name="disableNativeModal">
          <TestCase itShould="disableNativeModal=true">
            <Demo35 />
          </TestCase>
        </TestSuite>
        <TestSuite name="disableNativeModal">
          <TestCase itShould="disableNativeModal=false">
            <Demo36 />
          </TestCase>
        </TestSuite>
        <TestSuite name="preferredCountries">
          <TestCase itShould="首先出现的国家=AF">
            <Demo37 />
          </TestCase>
        </TestSuite>
        <TestSuite name="withModal,默认展示modal">
          <TestCase itShould="不展示modal">
            <Demo38 />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    minWidth: 200,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtonStyle: {
    width: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  instructions: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 0,
  },
  data: {
    minWidth: 300,
    padding: 10,
    marginTop: 7,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 / PixelRatio.get(),
    color: '#777',
  },
});
