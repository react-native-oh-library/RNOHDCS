import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  PixelRatio,
  Switch,
  Button,
  ScrollView,
  View,
  ViewProps,
} from 'react-native';
import CountryPicker, {
  CountryModalProvider,
  CountryCode,
  Country,
  DARK_THEME,
} from 'react-native-country-picker-modal';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 17,
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    fontSize: 10,
    textAlign: 'center',
    color: '#888',
    marginBottom: 0,
  },
  data: {
    maxWidth: 250,
    padding: 10,
    marginTop: 7,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 / PixelRatio.get(),
    color: '#777',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const Row = (
  props: ViewProps & {children?: React.ReactNode; fullWidth?: boolean},
) => (
  <View
    {...props}
    style={[
      styles.row,
      props.style,
      props.fullWidth && {
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 50,
      },
    ]}
  />
);
interface OptionProps {
  title: string;
  value: boolean;
  onValueChange(value: boolean): void;
}
const Option = ({value, onValueChange, title}: OptionProps) => (
  <Row fullWidth>
    <Text style={styles.instructions}>{title}</Text>
    <Switch {...{value, onValueChange}} />
  </Row>
);

export function CountryPickerTest() {
  const [countryCode, setCountryCode] = useState<CountryCode>('AF');
  const [country, setCountry] = useState<Country>();
  const [withCountryNameButton, setWithCountryNameButton] =
    useState<boolean>(false);
  const [withCurrencyButton, setWithCurrencyButton] = useState<boolean>(false);
  const [withFlagButton, setWithFlagButton] = useState<boolean>(true);
  const [withCallingCodeButton, setWithCallingCodeButton] =
    useState<boolean>(false);
  const [withFlag, setWithFlag] = useState<boolean>(true);
  const [withEmoji, setWithEmoji] = useState<boolean>(true);
  const [withFilter, setWithFilter] = useState<boolean>(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false);
  const [withCallingCode, setWithCallingCode] = useState<boolean>(false);
  const [withCurrency, setWithCurrency] = useState<boolean>(false);
  const [withModal, setWithModal] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(false);
  const [dark, setDark] = useState<boolean>(false);
  const [disableNativeModal, setDisableNativeModal] = useState<boolean>(false);
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };
  const switchVisible = () => setVisible(!visible);
  return (
    <CountryModalProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.welcome}>Welcome to Country Picker !</Text>
        <Option
          title="With country name on button"
          value={withCountryNameButton}
          onValueChange={setWithCountryNameButton}
        />
        <Option
          title="With currency on button"
          value={withCurrencyButton}
          onValueChange={setWithCurrencyButton}
        />
        <Option
          title="With calling code on button"
          value={withCallingCodeButton}
          onValueChange={setWithCallingCodeButton}
        />
        <Option
          title="With flag"
          value={withFlag}
          onValueChange={setWithFlag}
        />
        <Option
          title="With emoji"
          value={withEmoji}
          onValueChange={setWithEmoji}
        />
        <Option
          title="With filter"
          value={withFilter}
          onValueChange={setWithFilter}
        />
        <Option
          title="With calling code"
          value={withCallingCode}
          onValueChange={setWithCallingCode}
        />
        <Option
          title="With currency"
          value={withCurrency}
          onValueChange={setWithCurrency}
        />
        <Option
          title="With alpha filter code"
          value={withAlphaFilter}
          onValueChange={setWithAlphaFilter}
        />
        <Option
          title="Without native modal"
          value={disableNativeModal}
          onValueChange={setDisableNativeModal}
        />
        <Option
          title="With modal"
          value={withModal}
          onValueChange={setWithModal}
        />
        <Option title="With dark theme" value={dark} onValueChange={setDark} />
        <Option
          title="With flag button"
          value={withFlagButton}
          onValueChange={setWithFlagButton}
        />
        <CountryPicker
          theme={dark ? DARK_THEME : {}}
          {...{
            countryCode,
            withFilter,
            excludeCountries: ['FR'],
            withFlag,
            withCurrencyButton,
            withCallingCodeButton,
            withCountryNameButton,
            withAlphaFilter,
            withCallingCode,
            withCurrency,
            withEmoji,
            withModal,
            withFlagButton,
            onSelect,
            disableNativeModal,
            preferredCountries: ['US', 'GB'],
            modalProps: {
              visible,
            },
            onClose: () => setVisible(false),
            onOpen: () => setVisible(true),
          }}
        />
        <Text style={styles.instructions}>Press on the flag to open modal</Text>
        <Button
          title={'Open modal from outside using visible props'}
          onPress={switchVisible}
        />
        {country !== null && (
          <Text style={styles.data}>{JSON.stringify(country, null, 0)}</Text>
        )}
      </ScrollView>
    </CountryModalProvider>
  );
}
