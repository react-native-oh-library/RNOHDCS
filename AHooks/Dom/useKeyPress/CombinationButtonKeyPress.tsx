import { CheckOutlined } from '@ant-design/icons';
import { useKeyPress } from 'ahooks';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

export function CombinationButtonKeyPress() {
  const [state, setState] = useState<number>();

  useKeyPress(['shift.c'], () => {
    setState(1);
  });

  useKeyPress(['meta'], () => {
    setState(2);
  });

  useKeyPress('ctrl.alt.c', () => {
    setState(3);
  });

  useKeyPress('ctrl.enter', () => {
    setState(4);
  });

  // Attention: event.key === '0'
  useKeyPress('ctrl.alt.0', () => {
    setState(5);
  });

  return (
    <View>
      <Text>Try pressing the following:</Text>
      <View>
        <Text>1. Modifier key [shift.c]: {state === 1 && <CheckOutlined style={{ color: '#f00' }} />}</Text>
      </View>
      <View>
        <Text>2. Modifier key [meta]: {state === 2 && <CheckOutlined style={{ color: '#f00' }} />}</Text>
      </View>
      <View>
        <Text>3. Modifier key [ctrl.alt.c]: {state === 3 && <CheckOutlined style={{ color: '#f00' }} />}</Text>
      </View>
      <View>
        <Text>4. Modifier key [ctrl.enter]: {state === 4 && <CheckOutlined style={{ color: '#f00' }} />}</Text>
      </View>
      <View>
        <Text>5. Modifier key [ctrl.alt.0]: {state === 5 && <CheckOutlined style={{ color: '#f00' }} />}</Text>
      </View>
    </View>
  );
};
