import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import React, {useState} from 'react';
import {
  Button,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
  CountryModalProvider,
} from 'react-native-country-picker-modal';

const Demo = (props: any) => {
  const {children, ...rest} = props;
  const [countryCode, setCountryCode] = useState<CountryCode>();
  const [country, setCountry] = useState<Country>();
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <CountryModalProvider>
      <View style={styles.box}>
        <CountryPicker
          countryCode={countryCode}
          onSelect={onSelect}
          containerButtonStyle={styles.containerButtonStyle}
          withFilter
          filterProps={{placeholder: '请选择国家/地区'}}
          {...rest}
        />
        {children}
        {country !== null && (
          <Text style={styles.data}>{JSON.stringify(country, null, 0)}</Text>
        )}
      </View>
    </CountryModalProvider>
  );
};

export const disableNativeModalTest = () => {
  return (
    <Tester>
      <TestSuite name="disableNativeModalTest">
        <TestCase itShould={`disableNativeModalTest =true`}>
          <Demo disableNativeModalTest />
        </TestCase>
      </TestSuite>
      <TestSuite name="disableNativeModalTest">
        <TestCase itShould={`disableNativeModalTest =false`}>
          <Demo disableNativeModalTest={false} />
        </TestCase>
      </TestSuite>
    </Tester>
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
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
});
