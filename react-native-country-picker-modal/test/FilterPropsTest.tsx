import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import React, {useState} from 'react';
import {PixelRatio, ScrollView, StyleSheet, Text, View} from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
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
  );
};

export const FilterPropsTest = () => {
  return (
    <>
      <Tester>
        <TestSuite name="filterProps">
          <TestCase itShould="搜索框props,例如：placeholder: '请选择国家/地区'">
            <Demo />
          </TestCase>
        </TestSuite>
      </Tester>
    </>
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
