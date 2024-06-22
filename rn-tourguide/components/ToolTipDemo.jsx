import * as React from 'react'
import {
  Text,
  View,
} from 'react-native';
import {
  Tooltip
} from 'rn-tourguide';

export default function (props) {
  const [eventEmitterText, setEventEmitterText] = React.useState('');

  const handleNext = () => {
    console.log('next is clicked');
    setEventEmitterText('next is clicked');
  }
  const handlePrev = () => {
    console.log('prev is clicked');
    setEventEmitterText('prev is clicked');
  }
  const handleStop = () => {
    console.log('stop is clicked');
    setEventEmitterText('stop is clicked');
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
      <View>
        <Text style={{ color: '#000' }}>{eventEmitterText}</Text>
      </View>
    </View>
  )
}