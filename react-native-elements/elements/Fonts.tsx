import React from 'react';
import { ScrollView, StyleSheet, Platform } from 'react-native';
import { Text } from '@rneui/themed';

const fonts = [
  'FontAwesome',
  'FontAwesome5_Brands',
  'FontAwesome5_Regular',
  'FontAwesome5_Solid',
];


type FontsComponentProps = {};

const Fonts: React.FunctionComponent<FontsComponentProps> = () => {
  return (
    <>
      <Text style={styles.titleStyle}>Fonts Examples</Text>
      <ScrollView style={styles.container}>
        {fonts.map((font, index) => (
          <Text
            key={index}
            style={[styles.textStyle, { fontFamily: `${font}` }]}
          >
            {font}
          </Text>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default Fonts;
