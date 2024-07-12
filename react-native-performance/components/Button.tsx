import {Text, TouchableHighlight} from 'react-native';
import {PALETTE} from './palette';

export function Button({label, onPress}: {onPress: () => void; label: string}) {
  return (
    <TouchableHighlight
      underlayColor={PALETTE.REACT_CYAN_DARK}
      style={{
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: PALETTE.REACT_CYAN_LIGHT,
        borderWidth: 2,
        borderColor: PALETTE.REACT_CYAN_DARK,
      }}
      onPress={onPress}>
      <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
        {label}
      </Text>
    </TouchableHighlight>
  );
}
