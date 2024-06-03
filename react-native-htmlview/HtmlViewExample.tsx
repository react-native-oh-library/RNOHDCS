import {Tester, TestSuite} from '@rnoh/testerino';
import {TestCase} from '../components';
import React from 'react';
import {StyleSheet, Linking} from 'react-native';
import HTMLView from 'react-native-htmlview';

export const HtmlViewExample = () => {
    const htmlContent = `
    <h1>Hello, World!</h1>
    <p>This is a <a href="https://www.vmallres.com">link</a></p>
    <p>Here is an image: <img src="https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/10086102004921/428_428_a_mobileFF345C8650FF6E88771386A6433556D0.jpg" alt="Example Image" /></p>
`;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
      // Define custom styles for HTML elements
      a: {
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 20,
        borderColor:'#000000',
        borderWidth:2
      },
      img: {
        width: 200,
        height: 100,
      },
  });

    return (
      <Tester>
      <TestSuite name="HtmlViewExample">
        <TestCase.Example
          tags={['C_API']}
          itShould="TesterHtmlViewExample">
        <HTMLView 
        value={htmlContent} 
        stylesheet={styles} // Optional: Pass custom styles for HTML elements
        onLinkPress={(url:string) => Linking.openURL(url)} // Optional: Handle link presses
      />
        </TestCase.Example>
        </TestSuite>
        </Tester>
    );
  };
  