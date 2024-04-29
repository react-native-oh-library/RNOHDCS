import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, View, SafeAreaView } from 'react-native';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

interface Styles {
  scroll: object;
  container: object;
  safeContainer: object;
  column: object;
  row: object;
  card: object;
  button: object;
  display: object;
  text: object;
  content: object;
  bold: object;
}

let styles: Styles = {
  scroll: {
    padding: 4,
    paddingTop: 24,
    backgroundColor: '#E8EAF6',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
    backgroundColor: 'rgba(0,0,0,.05)',
  },
  safeContainer: {
    flex: 1,
    backgroundColor: '#E8EAF6',
  },
  column: {
    justifyContent: 'center',
    marginBottom: 8,
    backgroundColor: 'rgba(0,0,0,.05)',
  },
  row: {
    marginBottom: 8,
  },
  card: {
    borderRadius: 2,
    padding: 8,
    margin: 4,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    minHeight: 76,
    justifyContent: 'space-between',
    shadowOpacity: 0.54,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  button: {
    margin: 4,
  },
  display: {
    paddingHorizontal: 8,
    fontSize: 17,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, .87)',
  },
  text: {
    padding: 8,
    fontSize: 15,
    color: 'rgba(0, 0, 0, .54)',
  },
  content: {
    flex: 1,
    paddingVertical: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
};

/* eslint-disable react/prop-types */
let Strong: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => (
  <Text style={styles.bold} {...props}>
    {children}
  </Text>
);
/* eslint-enable */

export function MaterialButtons() {
      return (
        <SafeAreaView style={styles.safeContainer}>
          <ScrollView style={styles.scroll}>
            <View style={styles.card}>
              <View style={styles.content}>
                <Text style={styles.display}>default</Text>
                <Text style={styles.text}>
                  Buttons with default props, raised or flat, enabled or <Strong>disabled</Strong>
                </Text>
              </View>
              <RaisedTextButton style={{ marginVertical: 4 }} title="default button" />
              <RaisedTextButton style={{ marginVertical: 4 }} titleStyle={{ fontWeight: 'bold' }} title="disabled button" disabled />
              <TextButton style={{ marginVertical: 4 }} title="default flat button" />
              <TextButton style={{ marginVertical: 4 }}  disabledTitleColor="red" title="disabled flat button" disabled />
            </View>

            <View style={styles.card}>
              <View style={styles.content}>
                <Text style={styles.display}>raised</Text>
                <Text style={styles.text}>
                  Buttons with custom <Strong>color</Strong>, <Strong>titleColor</Strong>, increased{' '}
                  <Strong>rippleDuration</Strong> and <Strong>rippleOpacity</Strong>
                </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <RaisedTextButton
                  style={styles.button}
                  rippleDuration={600}
                  rippleOpacity={0.54}
                  title="flat"
                  color="#039BE5"
                  titleColor="white"
                />
                <RaisedTextButton
                  style={styles.button}
                  rippleDuration={1000}
                  rippleOpacity={0.64}
                  title="is"
                  color="#0288D1"
                  titleColor="white"
                />
                <RaisedTextButton
                  style={styles.button}
                  titleStyle={{ fontWeight: 'bold' }}
                  rippleDuration={1500}
                  rippleOpacity={0.74}
                  title="boring"
                  color="#0277BD"
                  titleColor="white"
                />
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.content}>
                <Text style={styles.display}>flat</Text>
                <Text style={styles.text}>Buttons with custom <Strong>titleColor</Strong> and <Strong>color</Strong></Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <TextButton style={{ margin: 4, marginLeft: 0 }} titleColor="black" title="decline" />
                <TextButton titleStyle={{ fontWeight: 'bold' }} titleColor="pink" title="accept" />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
}
