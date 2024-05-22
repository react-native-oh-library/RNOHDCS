import { ScrollView, Text, TextInput, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useUpdateEffect } from 'ahooks';

export function UseUpdateEffect() {

  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [updateEffectCount, setUpdateEffectCount] = useState(0);

  useEffect(() => {
    setEffectCount((c) => c + 1);
  }, [count]);

  useUpdateEffect(() => {
    setUpdateEffectCount((c) => c + 1);
    return () => {
      // do something
    };
  }, [count]); // you can include deps array if necessary

  return (
    <View>
      <Text>effectCount: {effectCount}</Text>
      <Text>updateEffectCount: {updateEffectCount}</Text>
      <Text>
        <Button title="reRender" onPress={() => setCount((c) => c + 1)} />
      </Text>
    </View>
  );
}
