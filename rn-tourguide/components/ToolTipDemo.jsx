import * as React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import {
  Tooltip
} from 'rn-tourguide';

export default function (props) {
  const handleNext = () => {
    Alert.alert('Tips','next is clicked');
    console.log('next is clicked');
  }
  const handlePrev = () => {
    Alert.alert('Tips','prev is clicked');
    console.log('prev is clicked');
  }
  const handleStop = () => {
    Alert.alert('Tips','stop is clicked');
    console.log('stop is clicked');
  }

  return (
    <View style={{ position: 'relative', height: 250, backgroundColor: '#ffffff' }}>
      <Tooltip
        currentStep={{
          name: 'test_001',
          order: 1,
          visible: false
        }}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleStop={handleStop}
        {...props.toolTipprops}
      />
    </View>
  )
}