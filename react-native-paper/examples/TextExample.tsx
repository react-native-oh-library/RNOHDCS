import * as React from 'react';
import { View,Platform, StyleSheet, ScrollView} from 'react-native';
import {  Caption,
  Headline,
  Paragraph,
  PaperProvider,
  Subheading,
  customText,
  Title,MD3LightTheme,configureFonts,useTheme,MD2Theme,MD3Theme} from 'react-native-paper';

import ScreenWrapper from '../ScreenWrapper';

const Text = customText<'customVariant'>();

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function TextDemo() { 
  return (
    <Tester>
      <ScrollView>
      <TestSuite name='TextDemo' >
        <TestCase itShould='displayLarge'>
           <Text style={styles.text} variant="displayLarge">
              Display Large
            </Text>
        </TestCase>

        <TestCase itShould='displayMedium'>
          <Text style={styles.text} variant="displayMedium">
                Display Medium
              </Text>
          </TestCase>

          <TestCase itShould='displaySmall'>
          <Text style={styles.text} variant="displaySmall">
              Display small
            </Text>
          </TestCase>

          <TestCase itShould='headlineLarge'>
          <Text style={styles.text} variant="headlineLarge">
              Headline Large
            </Text>
          </TestCase>

          <TestCase itShould='headlineMedium'>
          <Text style={styles.text} variant="headlineMedium">
              Headline Medium
            </Text>
          </TestCase>

          <TestCase itShould='headlineSmall'>
          <Text style={styles.text} variant="headlineSmall">
              Headline Small
            </Text>
          </TestCase>

          <TestCase itShould='titleLarge'>
            <Text style={styles.text} variant="labelLarge">
              Title Large
            </Text>
          </TestCase>

          <TestCase itShould='labelMedium'>
          <Text style={styles.text} variant="labelMedium">
              Label Medium
            </Text>
          </TestCase>

          <TestCase itShould='bodySmall'>
           <Text style={styles.text} variant="bodySmall">
              Label Medium
            </Text>
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}



const TextExample = () => {
  const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
  const { isV3 } = useExampleTheme();
  const fontConfig = {
    customVariant: {
      fontFamily: Platform.select({
        ios: 'Noteworthy',
        default: 'serif',
      }),
      fontWeight: '400',
      letterSpacing: Platform.select({
        ios: 7,
        default: 4.6,
      }),
      lineHeight: 54,
      fontSize: 40,
    },
  } as const;

  const theme = {
    ...MD3LightTheme,
    fonts: configureFonts({ config: fontConfig }),
  };

  return (
    <ScreenWrapper>
       <View style={styles.container}>
       {!isV3 && (
          <>
            <Caption style={styles.text}>Caption</Caption>
            <Paragraph style={styles.text}>Paragraph</Paragraph>
            <Subheading style={styles.text}>Subheading</Subheading>
            <Title style={styles.text}>Title</Title>
            <Headline style={styles.text}>Headline</Headline>
          </>
        )}
       {isV3 && (
          <>
            <Text style={styles.text} variant="displayLarge">
              Display Large
            </Text>
            <Text style={styles.text} variant="displayMedium">
              Display Medium
            </Text>
            <Text style={styles.text} variant="displaySmall">
              Display small
            </Text>

            <Text style={styles.text} variant="headlineLarge">
              Headline Large
            </Text>
            <Text style={styles.text} variant="headlineMedium">
              Headline Medium
            </Text>
            <Text style={styles.text} variant="headlineSmall">
              Headline Small
            </Text>

            <Text style={styles.text} variant="titleLarge">
              Title Large
            </Text>
            <Text style={styles.text} variant="titleMedium">
              Title Medium
            </Text>
            <Text style={styles.text} variant="titleSmall">
              Title Small
            </Text>

            <Text style={styles.text} variant="labelLarge">
              Label Large
            </Text>
            <Text style={styles.text} variant="labelMedium">
              Label Medium
            </Text>
            <Text style={styles.text} variant="labelSmall">
              Label Small
            </Text>

            <Text style={styles.text} variant="bodyLarge">
              Body Large
            </Text>
            <Text style={styles.text} variant="bodyMedium">
              Body Medium
            </Text>
            <Text style={styles.text} variant="bodySmall">
              Body Small
            </Text>

            <PaperProvider theme={theme}>
              <Text style={styles.text} variant="customVariant">
                Custom Variant
              </Text>
            </PaperProvider>
          </>
        )}
       </View>
    </ScreenWrapper>
  )

}


const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    marginVertical: 4,
  },
});

export default TextDemo;