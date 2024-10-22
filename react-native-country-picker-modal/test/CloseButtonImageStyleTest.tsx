import {TestCase, TestSuite, Tester} from '@rnoh/testerino';
import React, {useState} from 'react';
import {Button, PixelRatio, StyleSheet, Text, View} from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';

function getRandomColor() {
  // 生成一个0到255之间的随机整数
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // 将RGB值格式化为两位十六进制数，并拼接成#RRGGBB格式的颜色代码
  const color = `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  return color;
}

export const CloseButtonImageStyleTest = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>();
  const [country, setCountry] = useState<Country>();
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };
  const [color, setColor] = useState(getRandomColor());

  const changeCloseButtonImageStyle = () => {
    setColor(getRandomColor());
  };

  return (
    <>
      <Tester>
        <TestSuite name="closeButtonImageStyle">
          <TestCase itShould="设置关闭按钮图标样式">
            <View style={styles.box}>
              <CountryPicker
                countryCode={countryCode}
                onSelect={onSelect}
                containerButtonStyle={styles.containerButtonStyle}
                withFilter
                closeButtonImageStyle={{backgroundColor: color}}
              />
              {country !== null && (
                <Text style={styles.data}>
                  {JSON.stringify(country, null, 0)}
                </Text>
              )}
            </View>
            <Button
              title="设置随机样式"
              onPress={changeCloseButtonImageStyle}
            />
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
