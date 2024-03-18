import React, { useRef, useState } from 'react';
import { useLongPress } from 'ahooks';
import { Button, Text, View } from 'react-native';

export function ClickAndLongPress() {
  const [pressCounter, setPressCounter] = useState(0);
  const [clickCounter, setClickCounter] = useState(0);

  const ref = useRef<HTMLButtonElement>(null);

  useLongPress(() => setPressCounter((s) => s + 1), ref, {
    onClick: () => setClickCounter((s) => s + 1),
  });

  return (
    <View>
      <Button onPress={() => (ref)} title="Press me" />
      <Text>pressCounter: {pressCounter}</Text>
      <Text>clickCounter: {clickCounter}</Text>
    </View>
  );
};
