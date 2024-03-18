/**
 * title: Mouse position relative to the element
 * desc: By passing in the target element, you can get the position of the mouse relative to the element.
 *
 * title.zh-CN: 获取鼠标相对于元素的位置
 * desc.zh-CN: 通过传入目标元素，可以获取鼠标相对于元素的位置。
 */

import React, { useRef } from 'react';
import { useMouse } from 'ahooks';
import { StyleSheet, Text, View } from 'react-native';

export function PositionOfElements() {
  const ref = useRef(null);
  const mouse = useMouse(ref.current);

  return (
    <View>
      <View
        ref={ref}
        style={styles.element}
      >
        <Text style={styles.text}>element</Text>
      </View>

      <Text>Mouse In Element - x: {mouse.elementX}, y: {mouse.elementY}</Text>
      <Text>Element Position - x: {mouse.elementPosX}, y: {mouse.elementPosY}</Text>
      <Text>Element Dimensions - width: {mouse.elementW}, height: {mouse.elementH}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  element: {
    width: 200,
    height: 200,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
})