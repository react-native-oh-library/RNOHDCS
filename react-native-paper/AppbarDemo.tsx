import React  from 'react';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { Appbar } from 'react-native-paper';
import { ScrollView } from 'react-native-harmony';

export function AppbarDemo() {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Tester> 
    <ScrollView>
    <TestSuite name='Appbar'>
      <TestCase itShould="Top bar">
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Title" />
          <Appbar.Action icon="calendar" onPress={() => {}} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
      </TestCase>

      <TestCase itShould="Bottom bar">
        <Appbar>
          <Appbar.Action icon="archive" onPress={() => {}} />
          <Appbar.Action icon="email" onPress={() => {}} />
          <Appbar.Action icon="label" onPress={() => {}} />
          <Appbar.Action icon="delete" onPress={() => {}} />
        </Appbar>
      </TestCase>

      <TestCase itShould="Appbar.Header">
        <Appbar.Header>
          <Appbar.Content title="Title" subtitle={'Subtitle'} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
            <Appbar.Action icon='dots-horizontal' onPress={() => {}} />
        </Appbar.Header>
      </TestCase>

      <TestCase itShould="Appbar.BackAction">
       <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
        </Appbar.Header>
      </TestCase>

      <TestCase itShould="Appbar.Content">
        <Appbar.Header>
          <Appbar.Content title="Title" />
        </Appbar.Header>
      </TestCase>

      <TestCase itShould="Appbar.Header">
        <Appbar.Header>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Title" />
          <Appbar.Action icon="magnify" onPress={_handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
      </TestCase>
    </TestSuite>
    </ScrollView>
  </Tester>
  )
}

export default AppbarDemo;