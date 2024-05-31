import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { IconButton, List, MD2Colors, MD3Colors, MD2Theme,
  MD3Theme,
  useTheme } from 'react-native-paper';

import ScreenWrapper from '../ScreenWrapper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function IconButtonDemo() { 
  return (
    <Tester>
    <TestSuite name='IconButton' >
        <TestCase itShould='Default'>
          <View style={styles.row}>
            <IconButton icon="camera" size={24} onPress={() => {}} />
            <IconButton icon="camera" selected size={24} onPress={() => {}} />
            <IconButton icon="camera" disabled size={24} onPress={() => {}} />
            <IconButton icon="camera" size={24} onPress={() => {}} loading />
          </View>
        </TestCase>

        <TestCase itShould='Contained'>
        <View style={styles.row}>
          <IconButton
            icon="camera"
            mode="contained"
            size={24}
            onPress={() => {}}
          />
          <IconButton
            icon="camera"
            mode="contained"
            selected
            size={24}
            onPress={() => {}}
          />
          <IconButton
            icon="camera"
            mode="contained"
            disabled
            size={24}
            onPress={() => {}}
          />
          <IconButton
            icon=""
            mode="contained"
            selected
            loading
            size={24}
            onPress={() => {}}
          />
        </View>
       </TestCase>

       <TestCase itShould='outlined'>
       <View style={styles.row}>
          <IconButton
            icon="camera-outline"
            mode="outlined"
            size={24}
            onPress={() => {}}
          />
          <IconButton
            selected
            icon="camera"
            mode="outlined"
            size={24}
            onPress={() => {}}
          />
          <IconButton
            icon="camera"
            mode="outlined"
            disabled
            size={24}
            onPress={() => {}}
          />
          <IconButton
            icon=""
            mode="outlined"
            disabled
            size={24}
            onPress={() => {}}
            loading
          />
        </View>
       </TestCase>

       <TestCase itShould='Custom'>
         <View style={styles.row}>
          <IconButton
            icon="lock"
            size={24}
            iconColor={MD3Colors.tertiary50}
            onPress={() => {}}
          />
          <IconButton icon="camera" size={36} onPress={() => {}} />
          <IconButton
            icon="lock"
            size={36}
            onPress={() => {}}
            containerColor={MD3Colors.tertiary60}
          />
          <IconButton icon="heart" size={60} onPress={() => {}} />
          <IconButton icon="" size={60} onPress={() => {}} loading />
        </View>
       </TestCase>
     </TestSuite>
    </Tester>
  )
}

const styles = StyleSheet.create({
  v2Container: {
    flexDirection: 'row',
    padding: 8,
  },
  v3Container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  square: {
    borderRadius: 0,
  },
});

export default IconButtonDemo;