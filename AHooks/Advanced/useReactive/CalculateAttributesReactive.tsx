import React from 'react';
import { useReactive } from 'ahooks';
import { View, Text, Button } from 'react-native';

export function CalculateAttributesReactive() {
  const state: any = useReactive({ arr: [] });

  return (
    <View>
      <Text>
        state.arr: {JSON.stringify(state.arr)}
      </Text>
      <Button
        title="push"
        onPress={() => state.arr.push(Math.floor(Math.random() * 100))}
      />
      <Button
        title="pop"
        onPress={() => state.arr.pop()}
      />
      <Button
        title="shift"
        onPress={() => state.arr.shift()}
      />
      <Button
        title="unshift"
        onPress={() => state.arr.unshift(Math.floor(Math.random() * 100))}
      />
      <Button
        title="reverse"
        onPress={() => state.arr.reverse()}
      />
      <Button
        title="sort"
        onPress={() => state.arr.sort()}
      />
    </View>
  );
};