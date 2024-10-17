import {Map} from 'immutable';
import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import JSONTree from 'react-native-json-tree';
import {Tester, TestSuite} from '@rnoh/testerino';
import {TestCase} from './TestCase';

export  const RNJsonTree = () => {
  return (
    <ScrollView>
      <Tester>
        <TestSuite name="JSONTreeTest1">
          <TestCase.Example itShould="Theming">
            <TestTree1 />
          </TestCase.Example>
        </TestSuite>
        <TestSuite name="JSONTreeTest2">
          <TestCase.Example itShould="">
            <TestTree2 />
          </TestCase.Example>
        </TestSuite>
        <TestSuite name="JSONTreeTest3">
          <TestCase.Example itShould="">
            <TestTree3 />
          </TestCase.Example>
        </TestSuite>
        <TestSuite name="JSONTreeTest4">
          <TestCase.Example itShould="">
            <TestTree4 />
          </TestCase.Example>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};

const dataJson1 = {
  str: 'Hello',
};

const theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633',
};

const dataJson2 = {
  a: 'abcd',
  b: 10,
  c: false,
};

const dataJson3 = {
  a: {
    city: 'New York',
    country: 'USA',
  },
  b: ['reading', 'gaming', 'hiking'],
};

const dataJson4 = {
  name: 'John Doe',
  age: 30,
  isStudent: false,
  hobbies: ['reading', 'swimming'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
  },
};

const customTheme = {
  valueLabel: {
    textDecoration: 'underline',
  },
  nestedNodeLabel: ({style}, nodeType, expanded) => ({
    style: {
      ...style,
      textTransform: expanded ? 'uppercase' : style.textTransform,
    },
  }),
};

const getItemString = (type, data, itemType, itemString) => {
  return <Text>{type}</Text>;
};

const TestTree1 = () => {
  return (
    <ScrollView>
      <JSONTree data={dataJson1} theme={theme} invertTheme={false} />
    </ScrollView>
  );
};

const TestTree2 = () => {
  return (
    <ScrollView>
      <JSONTree data={dataJson3} theme={customTheme} hideRoot={true} />
    </ScrollView>
  );
};

const TestTree3 = () => {
  return (
    <ScrollView>
      <JSONTree
        data={dataJson2}
        labelRenderer={raw => <Text style={{fontWeight: 'bold'}}>{raw}</Text>}
        valueRenderer={raw => <Text style={{fontStyle: 'italic'}}>{raw}</Text>}
      />
    </ScrollView>
  );
};

const TestTree4 = () => {
  return (
    <ScrollView>
      <JSONTree data={dataJson4} getItemString={getItemString} />
    </ScrollView>
  );
};