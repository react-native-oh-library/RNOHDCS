import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import React, {useState} from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';

const RenderEmpty = () => {
  return (
    <View>
      <Text>List Empty!</Text>
    </View>
  );
};

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
        flatListProps={{
          ListEmptyComponent: <RenderEmpty />,
        }}
      />
      {country !== null && (
        <Text style={styles.data}>{JSON.stringify(country, null, 0)}</Text>
      )}
    </View>
  );
};

export const FlatListPropsTest = () => {
  return (
    <>
      <Tester>
        <TestSuite name="flatListProps">
          <TestCase itShould="flatListProps">
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
