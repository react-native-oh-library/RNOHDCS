import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, useTheme, ThemeProvider} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

type TextComponentProps = {};
const TextComponent: React.FunctionComponent<TextComponentProps> = () => {
  const {theme} = useTheme();

  return (
    <Tester>
      <TestSuite name="h1 h1style">
        <ThemeProvider>
          <View style={styles.view}>
            <TestCase itShould="H1 Secondary" tags={['C_API']}>
              <Text
                style={styles.text}
                h1
                h1Style={{color: theme?.colors?.secondary}}>
                Heading 1
              </Text>
            </TestCase>
          </View>
        </ThemeProvider>
      </TestSuite>
      <TestSuite name="h2 h2style">
        <ThemeProvider>
          <View style={styles.view}>
            <TestCase itShould="H2 Success" tags={['C_API']}>
              <Text
                style={styles.text}
                h2
                h2Style={{color: theme?.colors?.success}}>
                Heading 2
              </Text>
            </TestCase>
          </View>
        </ThemeProvider>
      </TestSuite>
      <TestSuite name="h3 h3style">
        <ThemeProvider>
          <View style={styles.view}>
            <TestCase itShould="H3 Primary" tags={['C_API']}>
              <Text
                style={styles.text}
                h3
                h3Style={{color: theme?.colors?.primary}}>
                Heading 3
              </Text>
            </TestCase>
          </View>
        </ThemeProvider>
      </TestSuite>
      <TestSuite name="h4 h4style">
        <ThemeProvider>
          <View style={styles.view}>
            <TestCase itShould="H4 Error" tags={['C_API']}>
              <Text
                style={styles.text}
                h4
                h4Style={{color: theme?.colors?.error}}>
                Heading 4
              </Text>
            </TestCase>
          </View>
        </ThemeProvider>
      </TestSuite>
      <TestSuite name="Text的style">
        <ThemeProvider>
          <View style={styles.view}>
            <TestCase itShould="style" tags={['C_API']}>
              <Text
                style={{backgroundColor:'blue',color:'yellow'}}
                h4
                >
                Text的style
              </Text>
            </TestCase>
          </View>
        </ThemeProvider>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  text: {
    textAlign: 'center',
    padding: 5,
  },
  more: {
    marginVertical: 20,
  },
  button: {
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default TextComponent;
