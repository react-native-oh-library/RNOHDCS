import { useDeepCompareEffect } from 'ahooks';
import React, { useEffect, useState, useRef } from 'react';
import { Button, Text, View } from 'react-native';

export function UseDeepCompareEffect() {
  const [count, setCount] = useState(0);
  const effectCountRef = useRef(0);
  const deepCompareCountRef = useRef(0);

  useEffect(() => {
    effectCountRef.current += 1;
  }, [{}]);

  useDeepCompareEffect(() => {
    deepCompareCountRef.current += 1;
    return () => {
      // do something
    };
  }, [{}]);

  return (
    <View>
      <Text>effectCount: {effectCountRef.current}</Text>
      <Text>deepCompareCount: {deepCompareCountRef.current}</Text>
      <Button title="reRender" onPress={() => setCount((c) => c + 1)} />
    </View>
  );
};