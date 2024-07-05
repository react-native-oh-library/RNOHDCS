import React from 'react';
import { View } from 'react-native';
import { Badge } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="BadgeTest">
      <TestCase itShould="Badge support text" tags={['C_API']}>
        <BadgeTest />
      </TestCase>
      <TestCase itShould="Badge support overflowCount and show 100+" tags={['C_API']}>
        <BadgeOverflowCountTest />
      </TestCase>
      <TestCase itShould="Badge show 99+" tags={['C_API']}>
        <BadgeOverflowCount99Test />
      </TestCase>
      <TestCase itShould="Badge text is new" tags={['C_API']}>
        <BadgeNewTest />
      </TestCase>
      <TestCase itShould="Badge text is dot" tags={['C_API']}>
        <BadgeDotTest />
      </TestCase>
      <TestCase itShould="Badge support corner" tags={['C_API']}>
        <BadgeCornerTest />
      </TestCase>
      <TestCase itShould="Badge support size" tags={['C_API']}>
        <Badge dot size='small'>
          <View
            style={{
              width: 52,
              height: 52,
              marginBottom: 10,
              backgroundColor: 'rgba(255, 140, 101, 0.15)',
            }}
          />
        </Badge>
        <Badge dot size='large'>
          <View
            style={{
              width: 52,
              height: 52,
              backgroundColor: 'rgba(255, 140, 101, 0.15)',
            }}
          />
        </Badge>
      </TestCase>
    </TestSuite>
  );
};

function BadgeTest() {
  return (
    <View style={{ padding: 20 }}>
      <Badge text={9}>
        <View
          style={{
            width: 52,
            height: 52,
            backgroundColor: 'rgba(255, 140, 101, 0.15)',
          }}
        />
      </Badge>
    </View>
  )
}

function BadgeOverflowCountTest() {
  return (
    <View style={{ padding: 20 }}>
      <Badge text={109} overflowCount={102}>
        <View
          style={{
            width: 52,
            height: 52,
            backgroundColor: 'rgba(255, 140, 101, 0.15)',
          }}
        />
      </Badge>
    </View>
  )
}

function BadgeOverflowCount99Test() {
  return (
    <View style={{ padding: 20 }}>
      <Badge text={109}>
        <View
          style={{
            width: 52,
            height: 52,
            backgroundColor: 'rgba(255, 140, 101, 0.15)',
          }}
        />
      </Badge>
    </View>
  )
}

function BadgeNewTest() {
  return (
    <View style={{ padding: 20 }}>
      <Badge text="new">
        <View
          style={{
            width: 52,
            height: 52,
            backgroundColor: 'rgba(255, 140, 101, 0.15)',
          }}
        />
      </Badge>
    </View>
  )
}

function BadgeDotTest() {
  return (
    <View style={{ padding: 20 }}>
      <Badge text={109} dot>
        <View
          style={{
            width: 52,
            height: 52,
            backgroundColor: 'rgba(255, 140, 101, 0.15)',
          }}
        />
      </Badge>
    </View>
  )
}

function BadgeCornerTest() {
  return (
    <View style={{ padding: 20 }}>
      <Badge text={33} corner>
        <View
          style={{
            width: 52,
            height: 52,
            backgroundColor: 'rgba(255, 140, 101, 0.15)',
          }}
        />
      </Badge>
    </View>
  )
}


