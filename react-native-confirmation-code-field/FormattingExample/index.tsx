import React, {useState, Fragment} from 'react';
import {View, Text} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './styles';

const CELL_COUNT = 9;
const BESE_NAME = 'FormattinExample';

const FormattingExample = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  console.log(`${BESE_NAME} - cellCount - ${CELL_COUNT}`);
  console.log(`${BESE_NAME} - rootStyle - ${JSON.stringify(styles.codeFieldRoot)}`);
  console.log(`${BESE_NAME} - cellCount - ${props}`);
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Social Security number</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        textInputStyle={{color:'red'}}
        renderCell={({index, symbol, isFocused}) => (
          <Fragment key={index}>
            <Text
              key={`value-${index}`}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
            {index === 2 || index === 4 ? (
              <View key={`separator-${index}`} style={styles.separator} />
            ) : null}
          </Fragment>
        )}
      />
    </View>
  );
};

export default FormattingExample;
