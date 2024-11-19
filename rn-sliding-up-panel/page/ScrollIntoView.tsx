import React, { createRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../components/styles';
import PanelView, { height } from '../components/Variable';

export function scrollIntoView() {
  const panelRef = createRef<SlidingUpPanel>();
  const draggableRange = { top: height, bottom: -50 };

  return (
    <View style={styles.container}>
      <View style={styles.viewbox}>
        <Button title='scrollIntoView()' onPress={() => {
          panelRef.current!._storeKeyboardPosition(50);
          panelRef.current!.scrollIntoView(panelRef.current);
        }} />
      </View>

      <SlidingUpPanel
        ref={panelRef}
        draggableRange={draggableRange}
        snappingPoints={[-100]}
        allowDragging={true}
      >
        <View style={styles.panel}>
          <PanelView onPress={() => panelRef.current!.hide()}></PanelView>
        </View>
      </SlidingUpPanel>
    </View>
  )
}