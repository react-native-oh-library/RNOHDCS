import React, { useMemo, useState } from 'react'
// import Slider from '@react-native-community/slider'
import { debounce } from 'debounce'
import { Text, View } from 'react-native'
import { styles } from './styles'
import SeekBar from '../../react-native-progress-seekbar-master/SeekBar'
type Props = {
  readonly min: number
  readonly max: number
  readonly value: number
  readonly name: string
  readonly onChange: (value: number) => void
}

export const SliderControl = React.memo(function SliderControl({
  min,
  max,
  value,
  name,
  onChange
}: Props) {
  const [initial] = useState(value)
  const onChangeDebounced = useMemo(() => debounce(onChange, 25), [onChange])

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name} {value.toFixed(3).replace(/\.?0+$/, '')}
      </Text>
      

	<SeekBar style={{margin: 20, backgroundColor: '#00000000'}}
			 min={min}
			 max={max}
			 progress={initial}
			 progressHeight={4}
			 progressBackgroundColor='#007AFF'
			 progressColor='#007AFF'
			 thumbSize={20}
			 thumbColor='#007AFF'
			 thumbColorPressed='#007AFF40'
			 onStartTouch={() => {console.log('onStartTouch')}}
			 onProgressChanged={onChangeDebounced}
			 onStopTouch={() => {console.log('onStopTouch')}}
	/>

      <View style={styles.bottom}>
        <Text style={styles.label}>{min}</Text>
        <Text style={styles.label}>{max}</Text>
      </View>
    </View>
  )
})
