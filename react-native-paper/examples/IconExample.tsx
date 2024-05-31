import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Icon, List } from 'react-native-paper';
import ScreenWrapper from '../ScreenWrapper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

function HelperTextDemo() { 
  return (
    <Tester>
    <TestSuite name='Icon' >
        <TestCase itShould='Default icon (MaterialCommunityIcon)'>
          <View style={styles.row}>
            <Icon source="camera" size={24} />
          </View>
        </TestCase>

        <TestCase itShould='Image icon'>
          <View style={styles.row}>
            <Icon source={{ uri: 'https://picsum.photos/700' }} size={48} />
          </View>
        </TestCase>

        <TestCase itShould='Render function icon'>
          <View style={styles.row}>
            <Icon source={AssetIcon} size={48} />
          </View>
        </TestCase>
     </TestSuite>
    </Tester>
  )
}

const AssetIcon = ({ size, testID }: { size: number; testID: string }) => (
  <Image
    accessibilityIgnoresInvertColors
    source={require('../assets/images/paper-icon.png')}
    style={{ width: size, height: size }}
    testID={testID}
  />
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 16,
  },
});

export default HelperTextDemo;