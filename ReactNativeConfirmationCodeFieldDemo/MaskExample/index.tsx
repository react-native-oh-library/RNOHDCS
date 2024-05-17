import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';

import styles from './styles';

const CELL_COUNT = 6;
const BESE_NAME = 'MaskExample';

const MaskExample = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  console.log(`${BESE_NAME} - cellCount - ${CELL_COUNT}`);
  console.log(`${BESE_NAME} - rootStyle - ${JSON.stringify(styles.codeFieldRoot)}`);
  console.log(`${BESE_NAME} - cellCount - ${props}`);
  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;
    let textChildIndex = null ;
    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="❤️"
          isLastFilledCell={isLastFilledCell({textChildIndex, value})}>
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Field with custom mask</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
    </View>
  );
};

export default MaskExample;
