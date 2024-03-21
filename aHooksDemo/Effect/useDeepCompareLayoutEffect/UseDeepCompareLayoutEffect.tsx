import { useDeepCompareLayoutEffect } from 'ahooks';
import React, { useLayoutEffect, useState, useRef } from 'react';
import { Button, Text, View } from 'react-native';

export function UseDeepCompareLayoutEffect() {
  const [, setCount] = useState(0);
  const effectCountRef = useRef(0);
  const deepCompareCountRef = useRef(0);

  useLayoutEffect(() => {
    effectCountRef.current += 1;
  }, [{}]);

  useDeepCompareLayoutEffect(() => {
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