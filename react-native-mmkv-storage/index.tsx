
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import { NavigationContainer, Page } from "./navitagiton"
import {ScrollView } from 'react-native';
import MMKVStorageTest from './MMKVStorageTest'
import MyComponent from './MMKVUseIndexTest';

export const MMKVDemo = () => {
  return (
    <Tester>
      <TestCase tags={['C_API']} itShould="material-ui">
      
        <NavigationContainer>
          <Page name="MMKVStorageTest">
            <MMKVStorageTest />
          </Page>
          <Page name="MMKVUseIndexTest">
            <MyComponent />
          </Page>
        </NavigationContainer>
      </TestCase>
    </Tester>
  )
}